<template>
    <main>
        <section>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <h1 class="text-4xl font-bold my-5 text-white">Admin panel</h1>
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form @submit.prevent="formInfo" class="space-y-4 md:space-y-6">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email</label>
                                <input v-model="form.email" type="email" name="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com" required="">
                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input v-model="form.password" type="password" name="password" id="password"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="">
                            </div>
                            <button type="submit"
                                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign
                                in</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account yet? <button type="button" @click="router.push('/register')"
                                    class="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

definePageMeta({
    layout: "custom",
});

const form = reactive({
    email: '',
    password: '',
})

const formInfo = () => {
    try {
        const info = fetch('http://localhost:4000/api/user/signin', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })
            .then(async response => {
                const data = await response.json();
                const accessToken = data.tokens.access_token;
                localStorage.setItem('tokenForUser', accessToken)
                localStorage.setItem('userId', data.user.id)
                router.push('/')
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
    } catch (error) {
        console.log(error, 'error message');
    }
}
</script>

<style lang="scss" scoped></style>