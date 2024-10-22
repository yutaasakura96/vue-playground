app.component("product-details", {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `<ul class='sizes-container'>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>`,
});
