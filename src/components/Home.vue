<template>
  <div class="container mx-auto px-40">
    <div class="flex justify-between mb-2 mt-4">
      <h1>Author: <span class="text-red-600	font-semibold">{{ author }}</span></h1>
      <div>
        <button class="w-28 h-10 border-2 bg-green-500 rounded text-white" @click="addItem">Create</button>
      </div>
    </div>
    <div class="mb-2">
      <input class="bg-gray-50 w-full border-2 rounded h-10 p-2" type="text" placeholder="Enter name" v-model="name"/>
    </div>
    <div>
      <ul v-for="item in items" :key="item.id" class="bg-gray-300 mb-2 p-2">
        <li class="flex justify-between	">
          <div>
            <p>Name: {{ item.name }}</p>
          </div>
          <div>
            <button class="w-8 h-8 border-2 bg-red-500 rounded text-white" @click="removeItem(item.id)">X</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import { useStore, mapActions } from "vuex"
import { Items, State } from "../store/type"
export default defineComponent({
  name: 'Home',
  props: {
    author: {
      type: String,
      required: true,
      default: 'Dick'
    }
  },
  setup: (props) => {
    const store = useStore()
    const items = computed<Items[]>(() => store.getters['getItems'])
    let name = ref('')

    const addItem = () => {
      store.dispatch<Items>('addItem', {
        id: items.value.slice(-1).pop(),
        name: name.value
      })
      name.value = ''
    }

    return { items, name, addItem }
  },
  methods: {
   ...mapActions(["removeItem"]) 
  }
})
</script>

<style scoped></style>
