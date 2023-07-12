Vue.component('v-base-count1', {
    template: `
        <div flex="dir:top cross:center">
            <span class="count1-name">{{text}}</span>
            <div class="count1-box">
                <count-to class='count1-count' :start-val='0' separator :end-val='num' :duration='2000'></count-to>
            </div>
        </div>
    `,
    props: {
        text: {
            type: String,
            default: '标题'
        },
        num: {
            type: [String, Number],
            default: '12345678'
        }
    },
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
})