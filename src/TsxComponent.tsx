import { defineComponent } from 'vue';

export default defineComponent({
  setup () {
    return () => (
      <div>
        Rendered with TSX
        <v-btn>Click me</v-btn>
      </div>
    )
  }
})
