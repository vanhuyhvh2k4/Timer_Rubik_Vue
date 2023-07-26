<template>
    <svg v-if="icon === 'home'" xmlns="http://www.w3.org/2000/svg" width="30" height="27"
        viewBox="0 0 30 27" fill="none">
        <path d="M1 9.59375L15.0625 1L29.125 9.59375" :stroke="color" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M26 15.0625V25.0625C26 25.5803 25.5803 26 25.0625 26H5.0625C4.54473 26 4.125 25.5803 4.125 25.0625V15.0625"
            :stroke="color" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <svg v-if="icon === 'category'" xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none">
        <path d="M9.02467 3.16054H26" :stroke="color" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 2.85185L2.23457 4.08641L5.32098 1" :stroke="color" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M1 12.1111L2.23457 13.3457L5.32098 10.2593" :stroke="color" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M1 21.3704L2.23457 22.605L5.32098 19.5185" :stroke="color" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M9.02467 12.4198H26" :stroke="color" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.02467 21.6791H26" :stroke="color" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <svg v-if="icon === 'star'" xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
        <path
            d="M9.6676 8.54733L13.0854 1.66284C13.5241 0.779052 14.7917 0.779052 15.2304 1.66284L18.6482 8.54733L26.2915 9.65812C27.2721 9.80064 27.6629 10.9992 26.9531 11.6867L21.4233 17.0419L22.7283 24.6071C22.8959 25.5787 21.8703 26.3195 20.9928 25.8607L14.1579 22.2869L7.32299 25.8607C6.44553 26.3195 5.41986 25.5787 5.58744 24.6071L6.89244 17.0419L1.36283 11.6867C0.652857 10.9992 1.04371 9.80064 2.02437 9.65812L9.6676 8.54733Z"
            :stroke="color" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <svg v-if="icon === 'setting'" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path
            d="M13.5 17.25C15.5711 17.25 17.25 15.5711 17.25 13.5C17.25 11.4289 15.5711 9.75 13.5 9.75C11.4289 9.75 9.75 11.4289 9.75 13.5C9.75 15.5711 11.4289 17.25 13.5 17.25Z"
            :stroke="color" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M23.028 11.4943L21.6559 8.181L23.5 6L21 3.5L18.8309 5.35369L15.4473 3.96218L14.6691 1H12.2262L11.4364 4.00141L8.13051 5.39495L6 3.5L3.5 6L5.31671 8.23606L3.96562 11.5579L1 12.25V14.75L4.00139 15.5694L5.39469 18.8746L3.5 21L6 23.5L8.23895 21.6754L11.4963 23.0154L12.25 26H14.75L15.5056 23.0165L18.8189 21.6444C19.3711 22.0391 21 23.5 21 23.5L23.5 21L21.6449 18.8117L23.0174 15.4975L25.9999 14.7215L26 12.25L23.028 11.4943Z"
            :stroke="color" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <svg v-if="icon === 'add'" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <path
            d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 2.17263e-05 25 2.17263e-05C38.8071 2.17263e-05 50 11.1929 50 25Z"
            :fill="color" />
        <path
            d="M26.8001 12.8L31.6001 8L40 16.4L35.2 21.2M26.8001 12.8L10.4971 29.103C10.1788 29.4212 10 29.8529 10 30.303V38H17.6971C18.1472 38 18.5788 37.8213 18.8971 37.5029L35.2 21.2M26.8001 12.8L35.2 21.2"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: ""
            },
            color: {
                type: String,
                default: "#333"
            },
            width: {
                type: String,
                default: ""
            },
            height: {
                type: String,
                default: ""
            }
        }
    }
</script>