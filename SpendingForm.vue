<template>
    <v-row>
        <v-col sm="12" md="5" order-sm="2" order-md="1">

            <generic-input-form :categories="categories" :storeNamespace="storeNamespace" :rootPath="rootPath"></generic-input-form>

        </v-col>


        <v-col v-if="!$vuetify.breakpoint.sm" md="1" order-md="2" class="text-center"><v-divider vertical></v-divider></v-col>
        <v-col align-self="center" sm="12" md="6" order-sm="1" order-md="3">
            <h2 class="mb-2">Spending</h2>
            <p>
                Your spending also influences your carbon emission. Recent research has found that the wealthiest 1% of the global population emits more than twice the amount than the poorest 50%.
                Greater Spend is likely to result in higher emission due to emission from transportation, manufacturing and processing.
            </p>
            <p>
                This section looks at the emission produced from manufacturing, energy use, and transportation of good and services you spend on.
            </p>
        </v-col>
    </v-row>
</template>

<script>
import GenericInputForm from './GenericInputForm.vue';
import _ from 'lodash';

export default {
    name: 'spending-form',

    components: {GenericInputForm},
    
    data: () => ({
        storeNamespace: 'calculator/updateSpending',
        rootPath: 'spending',
        categories: [
            { key: 'pharma', label: 'Annual pharmaceuticals spend', unit: '£', puluralize: false, invertUnit: true, type: 'number'},
            { key: 'clothing', label: 'Annual clothes, textiles & shoes spend', unit: '£', puluralize: false, invertUnit: true, type: 'number'},
            { key: 'paper', label: 'Annual paper based products (e.g. books, magazines, newspapers) spend', unit: '£', puluralize: false, invertUnit: true, type: 'number'},
            { key: 'computer', label: 'Annual Computers & IT equipment spend', unit: '£', puluralize: false, invertUnit: true, type: 'number'},
            { key: 'funi', label: 'Annual furniture and other manufactured goods spend', unit: '£', puluralize: false, invertUnit: true, type: 'number'},
            { key: 'edu', label: 'Annual education spend', unit: '£', puluralize: false, invertUnit: true, type: 'number'},
            { key: 'enter', label: 'Anual television, radio and phone (equipment) spend', unit: '£', puluralize: false, invertUnit: true, type: 'number'},
        ]
    }),

    computed: {

        calculator () {
            return this.$store.state.calculator;
        },

        reference () {
            return this.$store.state.reference;
        },

    },

    methods: {
        storeObjectHasInput(obj) {
            const values = Object.values(this.calculator[this.rootPath][obj]);
            let hasValue = false;
            values.forEach(element => {
                if(element) {
                    hasValue = true
                    return;
                }
            })
            return hasValue;
        },
        lowercase(val) {
            return _.toLower(val);
        }
    },
}
</script>