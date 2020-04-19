<template>
  <div class="columns">
    <div class="column">
      <b-field grouped>
        <b-field
          label="Flag type"
        >
          <b-switch
            v-model="flag.type"
            disabled
            true-value="Tricolor"
            false-value="Striped"
          >
            {{ flag.type }}
          </b-switch>
        </b-field>
        <b-field label="Orientation">
          <b-switch
            v-model="flag.tricolor.orientation"
            true-value="Vertical"
            false-value="Horizontal"
          >
            {{ flag.tricolor.orientation }}
          </b-switch>
        </b-field>
      </b-field>
    </div>
    <div class="column">
      <b-field grouped v-if="flag.isTricolor">
        <b-field
          v-for="(color, index) in flag.tricolor.bands"
          :key="index"
          :label="`#${index+1}`"
        >
          <swatches
            :value="color"
            :colors="colors"
            row-length="7"
            show-fallback
            show-border
            @input="onUpdateTricolorBand($event, index)"
            popover-to="right"
          ></swatches>
        </b-field>
      </b-field>
      <p v-if="flag.isTricolor" class="content">
        The colors are divided in three groups: <strong>european</strong>,
        <strong>pan-african</strong> and <strong>pan-slavic</strong>. <br />
        However, you are free to pick up your color by entering an hexadecimal.
      </p>
      <!--
      <b-field grouped v-if="flag.isStriped">
        <b-field label="Total stripes">
          <b-numberinput
            controls-position="compact"
            :min="1"
            :max="8"
            v-model="flag.striped.stripes.total"
          ></b-numberinput>
        </b-field>
        <b-field label="Stripes color">
          <swatches
            v-model="flag.striped.stripes.color"
            :colors="colors"
            :row-length="7"
            show-border
            show-fallback
            popover-to="right"
          ></swatches>
        </b-field>
        <b-field label="Background color">
          <swatches
            v-model="flag.background"
            :colors="colors"
            :row-length="7"
            show-border
            show-fallback
            popover-to="right"
          ></swatches>
        </b-field>
        <b-field label="Square color">
          <swatches
            v-model="flag.striped.square.color"
            :colors="colors"
            :row-length="7"
            show-border
            show-fallback
            popover-to="right"
          ></swatches>
        </b-field>
      </b-field>
      -->
    </div>
    <div class="column">
      <b-field grouped v-if="flag.isTricolor">
        <b-field
          label="Show coat of arms"
        >
          <b-switch
            v-model="flag.tricolor.showCoatOfArms"
            true-value="Show"
            false-value="Don't show"
          >
            {{ flag.tricolor.showCoatOfArms }}
          </b-switch>
        </b-field>
        <b-field v-if="flag.showCoatOfArms" label="Coat of arms">
          <b-select placeholder="Choose one" @input="onChangeCoat">
            <option
              v-for="(option, index) in flag.tricolor.images"
              :value="option.name"
              :key="index"
            >
              {{ option.text }}
            </option>
          </b-select>
        </b-field>
      </b-field>
    </div>
    <div class="column">
      <b-button type="is-dark" @click="onSave">Export to PNG</b-button>
    </div>
  </div>
</template>

<script>
import Swatches from 'vue-swatches';

export default {
  name: 'FlagParams',
  components: {
    Swatches,
  },
  props: {
    colors: {
      type: Array,
      default: () => [],
    },
    flag: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    bands() {
      return this.flag.bands;
    },
  },
  methods: {
    onSave() {
      this.$emit('save');
    },
    onChangeCoat(newName) {
      this.flag.changeCoat(newName);
    },
    onUpdateTricolorBand(newColor, index) {
      this.flag.updateBandColor({ newColor, index });
      // this.$set(this.flag.tricolor.bands, index, newColor);
    },
  },
};
</script>

<style lang="scss" scoped>
.column:not(:last-child) {
  border-right: 1px solid #ccc;
}
</style>
