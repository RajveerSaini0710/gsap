<template>
  <div
    class="min-h-screen bg-black p-4 md:p-8 lg:p-12 flex justify-center items-center"
  >
    <div class="mx-auto max-w-5xl">
      <div class="grid gap-6 lg:grid-cols-2">
        <!-- Contact Information -->
        <div class="space-y-4">
          <h1
            class="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl"
          >
            Get in Touch
          </h1>
          <p class="text-gray-400 md:text-lg">
            Let's discuss how we can help with your heavy lifting and industrial
            needs.
          </p>
          <div class="space-y-2 gap-2 flex flex-col">
            <div class="flex items-center space-x-3 text-white">
              <PhoneCall class="h-5 w-5 text-red-500" />
              <span>+91 9322296990</span>
            </div>
            <div class="flex items-center space-x-3 text-white">
              <Mail class="h-5 w-5 text-red-500" />
              <span>charanjit@sainilifters.com</span>
            </div>
            <div class="flex items-center space-x-3 text-white">
              <MapPin class="h-5 w-5 text-red-500" />
              <span
                >Plot No. J-854, Steel Market Rd, Kalamboli, Maharashtra
              </span>
            </div>
          </div>
        </div>
        <!-- Contact Form -->
        <div class="border border-red-500/20 bg-zinc-900 rounded-md shadow">
          <div class="p-4">
            <h2 class="text-white text-lg font-semibold">Send us a Message</h2>
            <p class="text-gray-400 text-sm">
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
          <div class="p-4">
            <form @submit.prevent="onSubmit" class="space-y-4">
              <div class="grid gap-4 md:grid-cols-2">
                <div class="space-y-2">
                  <label for="first-name" class="text-white">First name</label>
                  <input
                    id="first-name"
                    placeholder="Enter your first name"
                    required
                    class="border border-zinc-800 bg-zinc-950 text-white placeholder:text-zinc-400 w-full rounded-md p-2"
                  />
                </div>
                <div class="space-y-2">
                  <label for="last-name" class="text-white">Last name</label>
                  <input
                    id="last-name"
                    v-model="form.lastName"
                    placeholder="Enter your last name"
                    required
                    class="border border-zinc-800 bg-zinc-950 text-white placeholder:text-zinc-400 w-full rounded-md p-2"
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label for="email" class="text-white">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  placeholder="Enter your email"
                  required
                  type="email"
                  class="border border-zinc-800 bg-zinc-950 text-white placeholder:text-zinc-400 w-full rounded-md p-2"
                />
              </div>
              <div class="space-y-2">
                <label for="message" class="text-white">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  placeholder="Enter your message"
                  required
                  class="min-h-[100px] border border-zinc-800 bg-zinc-950 text-white placeholder:text-zinc-400 w-full rounded-md p-2"
                ></textarea>
              </div>
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full bg-red-500 text-white hover:bg-red-600 rounded-md p-2 disabled:opacity-50"
              >
                <span v-if="isLoading" class="flex items-center justify-center">
                  <Loader class="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </span>
                <span v-else>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { PhoneCall, Mail, MapPin, Loader } from "lucide-vue-next"; // Import Lucide icons

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});

const isLoading = ref(false);

const onSubmit = async () => {
  isLoading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  isLoading.value = false;
};
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>
