<template >
<div id="app">
    <h5>{{ msg }} <span class="badge bg-secondary">New</span></h5>
    span {{ tt }} :DD
    
</div>

</template>
<script>
import j from './data.json';
export default {
    name: 'Test',
    data() {
        return {
            aa: '456!!!',
            tt: '11'
        }
    },
    props: {
        msg: String
    },
    created() {
        j.forEach(element => console.log(element.name));
    }
            
    
}
</script>
<style  scoped></style>