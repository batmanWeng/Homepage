<template>
    <div class="fixed_bottom">
        <mu-paper>
            <mu-bottom-nav :value="commData.selectIndex" @change="handleChange">
                <mu-bottom-nav-item value="tab1" :title="commData.tab1" icon="restore"/>
                <mu-bottom-nav-item value="tab2" :title="commData.tab2" icon="favorite"/>
                <mu-bottom-nav-item value="tab3" :title="commData.tab3" icon="location_on"/>
            </mu-bottom-nav>
        </mu-paper>
    </div>
</template>
<script>
    export default{
        props:{
            commData:{
                type:Object
            }
        },
        methods: {
            handleChange (val){
                switch (val) {
                    case 'tab1':
                        this.$router.push('/mainview');
                        break;
                    case 'tab2':
                        this.$router.push('/Reading');
                        break;
                    case 'tab3':
                        this.$router.push('/setting');
                        break;
                    default:
                }
            }
        }
    }
</script>
