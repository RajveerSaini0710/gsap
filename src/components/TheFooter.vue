<template>
  <footer
    class="w-full transition-colors"
    :class="
      isDark ? 'header-bg-black text-white' : 'header-bg-white text-[#234a76]'
    "
  >
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8">
        <!-- Company Info -->
        <div class="space-y-4 col-span-2">
          <RouterLink to="/" class="flex items-center space-x-2">
            <span class="text-3xl font-bold">Saini Lifters</span>
          </RouterLink>
          <p
            :class="isDark ? 'text-gray-400' : 'text-[#234a76]/80'"
            class="text-sm"
          >
            Strength in Every Lift,<br />
            Reliability in Every Rise
          </p>
          <div class="flex space-x-4">
            <a
              href="https://facebook.com"
              class="transition-colors hover:text-red-500"
            >
              <FacebookIcon class="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              class="transition-colors hover:text-red-500"
            >
              <TwitterIcon class="h-6 w-6" />
            </a>
            <a
              href="#"
              class="transition-colors hover:text-red-500"
              @click.prevent="sendWhatsAppMessage"
            >
              <MessageCircleMore class="h-6 w-6" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4 col-span-1">
          <h3 class="text-lg font-semibold">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <RouterLink
                to="/about"
                class="transition-colors"
                :class="
                  isDark
                    ? 'text-gray-400 hover:text-red-500'
                    : 'text-[#234a76] hover:text-red-500'
                "
              >
                About Us
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/services"
                class="transition-colors"
                :class="
                  isDark
                    ? 'text-gray-400 hover:text-red-500'
                    : 'text-[#234a76] hover:text-red-500'
                "
              >
                Services
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/work"
                class="transition-colors"
                :class="
                  isDark
                    ? 'text-gray-400 hover:text-red-500'
                    : 'text-[#234a76] hover:text-red-500'
                "
              >
                Our Work
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/contact-us"
                class="transition-colors"
                :class="
                  isDark
                    ? 'text-gray-400 hover:text-red-500'
                    : 'text-[#234a76] hover:text-red-500'
                "
              >
                Contact
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4 col-span-2">
          <h3 class="text-lg font-semibold">Contact Us</h3>
          <div class="space-y-3">
            <a
              href="tel:+1234567890"
              class="flex items-center space-x-2 transition-colors"
              :class="
                isDark
                  ? 'text-gray-400 hover:text-red-500'
                  : 'text-[#234a76] hover:text-red-500'
              "
            >
              <PhoneIcon class="h-5 w-5" />
              <span>+91 9322296990</span>
            </a>
            <a
              href="#"
              class="flex items-center space-x-2 transition-colors"
              :class="
                isDark
                  ? 'text-gray-400 hover:text-red-500'
                  : 'text-[#234a76] hover:text-red-500'
              "
              @click.prevent="redirectToEmail"
            >
              <MailIcon class="h-5 w-5" />
              <span>charanjit@sainilifters.com</span>
            </a>
            <div
              class="flex items-start space-x-2"
              :class="isDark ? 'text-gray-400' : 'text-[#234a76]'"
            >
              <MapPinIcon class="h-5 w-5 mt-1 flex-shrink-0" />
              <span>
                Plot No. J-854, Steel Market Rd, Sector AWC, Kalamboli, Panvel,
                Navi Mumbai, Maharashtra 410218</span
              >
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="space-y-4 col-span-3">
          <h3 class="text-lg font-semibold">Location</h3>
          <div
            class="w-full h-48 rounded-lg overflow-hidden transition-all grayscale"
            :class="
              isDark
                ? 'bg-gray-800 hover:grayscale-0'
                : 'bg-gray-300 hover:grayscale-0'
            "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.724153957994!2d73.10423237526035!3d19.031873082163685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e91e0aa292ad%3A0x5d915b78913cf77c!2sSaini%20Lifters%20Crane%20Service!5e0!3m2!1sen!2sin!4v1733670993020!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="mt-12 pt-8 border-t text-center text-sm transition-colors"
        :class="
          isDark
            ? 'border-gray-800 text-gray-400'
            : 'border-gray-300 text-[#234a76]/80'
        "
      >
        <p>
          &copy; {{ new Date().getFullYear() }} Saini Lifters. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FacebookIcon,
  TwitterIcon,
  MessageCircleMore,
} from "lucide-vue-next";
import { RouterLink } from "vue-router";
import { useDark } from "@vueuse/core";
import {
  redirectToEmail,
  sendWhatsAppMessage,
} from "../utils/commonFunctions.js";

const isDark = useDark();
</script>

<style scoped>
.grayscale {
  filter: grayscale(100%);
}

.hover\:grayscale-0:hover {
  filter: grayscale(0%);
}

.header-bg-white {
  background-color: rgba(255, 255, 255, 0.8);
}

.header-bg-black {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
