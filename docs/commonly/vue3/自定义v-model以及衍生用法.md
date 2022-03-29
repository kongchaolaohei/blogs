# 自定义 `v-model` 以及衍生用法

自己摸索了了自定义`v-model`的几种用法,如有不妥请多指教.

## 常规用法

正常的自定义`v-modle`的方式

**组件定义:**

```html
<template>
  <div>
    custome-input:
    <input type="text" :value="modelValue" @input="inputValueChange" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, PropType } from "vue";

  export default defineComponent({
    name: "CustomeInput",
    props: {
      modelValue: {
        type: String as PropType<string>,
      },
    },
    setup(props, { emit }) {
      const inputValueChange = (event: any) => {
        emit("update:modelValue", event.target?.value);
      };
      return {
        inputValueChange,
      };
    },
  });
</script>
```

**组件使用:**

```jsx
<CustomeInput v-model="modelAloneValue" />
```

## 组件自定义多个`v-model`

当有需求对一个组件`v-model`多个数据时,可以通过设置多个`v-model来解决`

**组件定义**

```html
<template>
  <div>
    custome-couple-input:
    <input type="text" :value="modelValue" @input="inputValueChange" />
    custome-couple-input2:
    <input type="text" :value="modelValuetwo" @input="inputValueChangetwo" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, PropType } from "vue";

  export default defineComponent({
    name: "CustomeInputs",
    props: {
      modelValue: {
        type: String as PropType<string>,
      },
      modelValuetwo: {
        type: String as PropType<string>,
      },
    },
    setup(props, { emit }) {
      const inputValueChange = (event: any) => {
        emit("update:modelValue", event.target?.value);
      };
      const inputValueChangetwo = (event: any) => {
        emit("update:modelValuetwo", event.target?.value);
      };
      return {
        inputValueChange,
        inputValueChangetwo,
      };
    },
  });
</script>
```

**组件使用**

```jsx
<CustomeInputs
  v-model:modelValue="modelCoupleValueone"
  v-model:modelValuetwo="modelCoupleValuetwo"
/>
```

## 多个数据合并改变的`v-model`

内部多个数据变化之后经过处理之后暴露出来的数据可以用这种方式处理.

例如下面这个组件,将两个`input`输入框的结果,相加处理后的结果暴露出去.

**组件定义**

```html
<template>
  <div>
    custome-group-input:
    <input type="text" :value="value" @input="handleValueInput" />
    custome-group-input2:
    <input type="text" :value="valuetwo" @input="handleValueTwoInput" />
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, PropType, watch } from "vue";

  export default defineComponent({
    name: "CustomeInputGroup",
    props: {
      modelValue: {
        type: String as PropType<string>,
      },
    },
    setup(props, { emit }) {
      const value = ref("");
      const valuetwo = ref("");

      const resultValue = computed(() => {
        return value.value + valuetwo.value;
      });

      const handleValueInput = (event: any) => {
        value.value = event.target?.value;
      };

      const handleValueTwoInput = (event: any) => {
        valuetwo.value = event.target?.value;
      };

      watch(resultValue, () => {
        emit("update:modelValue", resultValue.value);
      });

      return {
        value,
        valuetwo,
        handleValueInput,
        handleValueTwoInput,
      };
    },
  });
</script>
```

```jsx
<CustomeInputGroup v-model="modelGroupValue"></CustomeInputGroup>
```

## 将子组件的`v-model`暴露出来

**组件定义**

```html
<template>
  <div>
    <CustomeInput v-model="value" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, PropType, ref, watch } from "vue";
  import CustomeInput from "./CustomeInput.vue";

  export default defineComponent({
    name: "CustomeInputPenetrate",
    props: {
      modelValue: {
        type: String as PropType<string>,
      },
    },
    components: {
      CustomeInput,
    },
    setup(props, { emit }) {
      const value = ref("");
      watch(value, () => {
        emit("update:modelValue", value.value);
      });
      return {
        value,
      };
    },
  });
</script>
```

**组件使用**

```jsx
<CustomeInputPenetrate v-model="modelPenetrateValue"></CustomeInputPenetrate>
```
