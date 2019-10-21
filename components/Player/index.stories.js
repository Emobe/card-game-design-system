import { text } from "@storybook/addon-knobs";
import CPlayer from "./index.vue";

export default {
  title: "CPlayer",
  component: CPlayer
};

export const story = () => ({
  components: { CPlayer },
  props: {
    name: {
      default: text("Name", "Anthony")
    },
    image: {
      default: text(
        "Image",
        "http://www.newdesignfile.com/postpic/2014/07/generic-profile-avatar_352864.jpg"
      )
    }
  },
  template: `<CPlayer :name="name" :image="image" />`
});
