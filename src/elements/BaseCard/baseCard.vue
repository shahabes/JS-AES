<template>
    <div :class="$style.box_shadow_element">
        <slot></slot>
    </div>
</template>

<style module>
.box_shadow_element {
    background-color: #302c40;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
</style>