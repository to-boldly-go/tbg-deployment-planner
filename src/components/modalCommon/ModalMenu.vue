<template>
  <div class='modal-menu'>
    <div class='modal-menu-item fill'></div>
    <div class='modal-menu-select'>
      <div
        v-for="(item, index) of menuItems"
        :key="`menu-${index}`"
        class='modal-menu-item'
        :class="{'selected': selected(item.modal)}"
        @click="() => setModal(item)"
        >{{item.label}}</div>
    </div>
    <div class='modal-menu-item fill'></div>
  </div>
</template>

<script>
export default {
  name: 'ModalMenu',
  props: ['menuItems'],
  computed: {
    currentModal () {
      return this.$store.state.currentModal
    },
    currentSchema () {
      return this.$store.state.shipData.currentSchema
    }
  },
  methods: {
    setModal (menuItem) {
      if (menuItem.modal !== 'timeline-list') {
        this.$store.commit('clearCopied')
      }
      this.$store.commit('setModal', menuItem.modal)
    },
    selected (modal) {
      return this.currentModal === modal || (this.currentSchema === modal && this.currentModal === 'modal-list')
    }
  }
}
</script>

<!-- @click="() => menuClick(item.mutation)" -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-menu {
  height: inherit;
  width: 160px;
  font-size: 15px;
  font-weight: normal;
  text-align: center;
  display: inline-flex;
  flex-flow: column;
}
.modal-menu-item {
  margin: 5px 0;
  width: 160px;
  line-height: 40px;
  background-color: #c86;
  color: black;
}
.modal-menu-item.selected {
  background-color: #4a4;
}
/* .modal-menu-item.select {
  height: 40px;
  margin: 5px 0 0 0;
}
.modal-menu-item.select:last-child {
  margin-bottom: 5px;
} */
.modal-menu-item.fill {
  margin: 0;
  background-color: #68c;
}
.modal-menu-item.fill:first-child {
  flex: 0 0 20px;
}
.modal-menu-item.fill:last-child {
  flex: 1;
}
</style>
