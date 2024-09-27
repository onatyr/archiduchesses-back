<template>
  <div class="searchable-list">
    <input
        type="text"
        v-model="searchQuery"
        @input="handleSearch"
        placeholder="Search..."
        class="search-input"
    />

    <!-- Slot to render filtered results -->
    <slot :items="filteredItems"></slot>
  </div>
</template>

<script>
export default {
  name: "SearchableList",
  props: {
    query: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      searchQuery: "",
      filteredItems: []
    };
  },
  methods: {
    async handleSearch() {
      const result = await this.query(this.searchQuery);
      this.filteredItems = result; // Update the filtered items
    }
  }
};
</script>

<style scoped>
/* Basic styles */
.search-input {
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
}
</style>
