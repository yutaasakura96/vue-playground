const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "A warm fuzzy pair of socks.",
      image: "./assets/images/socks_blue.jpg",
      url: "https://www.vuemastery.com/",
      inventory: 100,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
      sizes: ["S", "M", "L", "XL"],
    };
  },
});
