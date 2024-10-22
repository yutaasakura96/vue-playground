app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
    cart: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product-display">
    <p>Shipping: {{ shipping }}</p>
  <div class="product-container">
    <div class="product-image">
      <img :src="image" :class="{ 'out-of-stock-img': !inStock }" />
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <p>{{ sale }}</p>
      <h2>Materials</h2>
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
      <h3>Sizes</h3>
      <product-details :details='details'></product-details>
      <h3>Available Colors</h3>
      <div
        v-for="(variant, index) in variants"
        :key="variant.id"
        @mouseover="updateVariant(index)"
        class="color-circle"
        :style="{ backgroundColor: variant.color }"
      ></div>
      <button
        class="button"
        @click="addToCart()"
        :class="{ disabledButton: !inStock }"
        :disabled="!inStock"
      >
        Add to Cart
      </button>
      <button v-show="cart.length >= 1" class="button" @click="removeFromCart()">
        Remove Item
      </button>
    </div>
  </div>
</div>`,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      description: "A warm fuzzy pair of socks.",
      url: "https://www.vuemastery.com/",
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      selectedVariant: 0,
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      sizes: ["S", "M", "L", "XL"],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit("remove-from-cart", this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    sale() {
      if (this.onSale) {
        return this.brand + " " + this.product + " is on sale!";
      }
      return "";
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return "$2.99";
    },
  },
});
