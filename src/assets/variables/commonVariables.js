import { ref } from "vue";

export const commonVariables = ref({
  darkMode: null,
  screenWidth: null,
});

export const articleSectionData = ref([
  {
    image: {
      image1:
        "https://assets-global.website-files.com/60eeb025115a75902b86a796/647e3cc83822b06137a15c00_Header%201%20Left.jpg",
      image2:
        "https://assets-global.website-files.com/60eeb025115a75902b86a796/647e3ccc6c2ce83328c9b669_Header%202%20Right.jpg",
    },
    date: "MARCH 2023",
    place: "GREENLAND",
    title: "Visit Greenland",
    buttonText: "SEE CASE STUDY",
    colorData: ["#214356", "#8DB2C3", "#E7E7C1", "#989598", "#445F88"],
  },
  {
    image: {
      image1:
        "https://assets-global.website-files.com/60eeb025115a75902b86a796/636e58bc6814353894114eaa_follow-the-tracks-preview-left.jpg",
      image2:
        "https://assets-global.website-files.com/60eeb025115a75902b86a796/636e58bec0125c0bb24a1993_follow-the-tracks-preview-right.jpg",
    },
    date: "SEPTEMBER 2019",
    place: "MONGOLIA",
    title: "Follow The Tracks",
    buttonText: "SEE CASE STUDY",
    colorData: ["#302A27", "#965F39", "#E1A57D", "#AFD4EE", "#445F88"],
  },
]);
