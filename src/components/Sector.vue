<template>
<div
  v-show="filterShow"
  class='sector'
  :class="[sectorTypeCSS]"
  :id="'sector-' + name"
>
  <div class='sector-header'>
    <span class='sector-name' @click="toggleShow">{{toggleIcon}} {{displayName}}</span>
    <span class='sector-info'>D{{sectorStats[5]}}{{defDisp}}</span>
    <span class='sector-info'>C{{sectorStats[0]}}</span>
    <span class='sector-info'>S{{sectorStats[1]}}</span>
    <span class='sector-info'>P{{sectorStats[4]}}</span>
    <button
      v-if="type !== 'Theatre Fleet'"
      class='sector-edit'
      @click="editSector"
    >Edit {{editButtonDisplay}}</button>
  </div>
  <div v-show="!sectorShow" class='ship-summary'>
    <span v-for="shipClass of Object.keys(shipSummary)" :key="shipClass" class='sector-info'>
      {{shipSummary[shipClass]}} {{shipClass}}
    </span>
  </div>
  <div v-show="sectorShow" class='sector-drag-wrapper' :class="[fullSize]">
    <draggable
      class='sector-drag'
      :class="[fullSize]"
      :id="'s-drag-' + name"
      v-model="sectorShips"
      :options="{group:'ships'}"
      :move="onMove"
      @change="onUpdate"
    >
      <Ship v-for="shipReg of sectorShips" :key="shipReg" :registry="shipReg"></Ship>
    </draggable>
  </div>
</div>
</template>

<script>
import Ship from './Ship'
import draggable from 'vuedraggable'

export default {
  name: 'Sector',
  props: ['name'],
  components: {
    Ship,
    draggable
  },
  data () {
    return {
      sectorShow: false
    }
  },
  computed: {
    sector () {
      return this.$store.getters.sectors[this.name]
    },
    shipObjects () {
      return this.$store.getters.shipObjects
    },
    displayName () {
      return this.sector.name
    },
    defence () {
      return this.sector.defence
    },
    type () {
      return this.sector.type
    },
    theatre () {
      return this.sector.theatre
    },
    supporters () {
      return this.sector.supporters
    },
    sectorTypeKey () {
      return this.type.replace(' ', '').toLowerCase()
    },
    filterShow () {
      return this.$store.state.sectorFiltering.filterCategories.theatre[this.theatre.toLowerCase()]
        && this.$store.state.sectorFiltering.filterCategories.type[this.sectorTypeKey]
    },
    defDisp () {
      return this.defence === 0 ? '' : `/${this.defence}`
    },
    sectorStats () {
      let stats = []
      for (var i = 0; i < 5; i++) {
        stats[i] = this.sectorShips.reduce((acc, curr) =>
          acc + this.shipObjects[curr].classStats[i]
              + this.shipObjects[curr].veterancy
              + this.shipObjects[curr].bonusStats[i], 0)
      }
      stats[5] = this.sectorShips.reduce((acc, curr) =>
        acc + this.shipObjects[curr].classStats[5]
            + this.shipObjects[curr].bonusStats[5], 0)
      return stats
    },
    sectorShips: {
      get () {
        return this.$store.getters.sectors[this.name].ships
      },
      set (value) {
        this.$store.commit('updateSectorField', {sectorName: this.name, field: 'ships', value: value})
      }
    },
    toggleIcon () {
      return this.sectorShow ? '\u25BC' : '\u25BA'
    },
    sectorInfoObj () {
      return {
        name: this.name,
        defence: this.defence,
        type: this.type,
        theatre: this.theatre,
        supporters: this.supporters.slice()
      }
    },
    sectorTypeCSS () {
      return this.type.replace(' ', '-').toLowerCase()
    },
    shipSummary () {
      let ships = this.sectorShips.map(ship => this.shipObjects[ship].shipClass)
      let summ = {}
      for (let className of ships) {
        summ[className] = summ[className] ? summ[className] + 1 : 1
      }
      return summ
    },
    editButtonDisplay () {
      switch (this.type) {
        case 'Core':
        case 'Border':
          return 'Sector'
        default:
          return this.type
      }
    },
    fullSize () {
      return this.$store.state.fullShipSize ? 'fullsize' : 'smallsize'
    }
  },
  methods: {
    onMove (evt) {
      return evt.draggedContext.element.mobile
    },
    onUpdate () {
      this.$store.commit('sortSector', this.name)
    },
    toggleShow () {
      this.sectorShow = !this.sectorShow
    },
    editSector () {
      this.$store.commit('setSelectedSectorName', this.name)
      this.$store.commit('updateSelectedSectorAllFields', this.sectorInfoObj)
      this.$store.commit('setModal', 'sector-edit')
    },
    displayClassName (className) {
      let bits = className.split('-')
      if (bits.length === 1) {
        return `<em>${bits[0]}</em>`
      } else {
        return `<em>${bits[0]}</em>-${bits[1]}`
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sector {
  text-align: left;
  padding: 0 0px;
  /* margin-left: 250px; */
  border-bottom: 2px solid #ccc;
}
.sector-header {
  padding: 10px 0 10px 50px;
}

.theatre-fleet>.sector-header {
  padding-left: 10px;
}
.theatre-fleet>.sector-header,
.theatre-fleet>.ship-summary {
  background-color: #8c8;
  color: black;
}

.task-force .sector-header,
.task-force .ship-summary {
  background-color: #888;
  color: black;
}
.sector-name {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  min-width: 150px;
}
.sector-info {
  margin-left: 20px;
}
.sector-edit {
  margin-right: 10px;
  float: right;
  background-color: #c99;
  height: 24px;
  border: none;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
  vertical-align: top;
  font-size: 16px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.ship-summary {
  padding: 0 0 10px 80px;
}
.sector-drag-wrapper {
  margin-left: 20px;
  padding-right: 10px;
  margin-bottom: 5px;
  border-top: 1px solid #ccc;
  min-height: 20px;
  /* overflow-x: auto; */
  /* overflow-y: hidden; */
  white-space: nowrap;
}
.sector-drag-wrapper.fullsize {
  height: 98px;
  overflow-x: auto;
  overflow-y: hidden;
}
.theatre .sector-drag-wrapper,
.task-force .sector-drag-wrapper {
  border-top: none;
}
.sector-drag {
  min-height: 20px;
  width: 100%;
}
.smallsize.sector-drag {
  display: flex;
  flex-flow: row wrap;
}
/* height */
::-webkit-scrollbar {
    height: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  height: 8px;
  border-radius: 4px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}
</style>
