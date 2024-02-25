import { createMachine } from "xstate";
 export const RedLightMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QCdIFoA2BLKALALgHQD2AZqQMQAKA8gOoCiASgPo0ByA2gAwC6ioAA7FYWfFmIA7ASAAeiAIwAmAKyEAbCoAcW9dwDMSrUu4KALAHYANCACeiLQsKGlATn0KV+7if1aLAL4BNqgQmDgEJJLU9MxsAGLxPPxIIMKi4lIy8giuhP5m+irc6loqrgZK6uo29ghKZkqEZgrcWu4V5hauFoHBIKHheERShFCoYNGysPgAhvhghLOkC8gAFK3cWwCUFIPYw1FjE5LJMuliEtKpOQr+hG6uZlqFXhYKCrWIXk7v6neqHz-bpBELoA6RUbEZCzSQwCjTOYLJYrMDrbw7PbgiIjSQkGFwsBnVIXTLXUA5Fp5VSuVotBTqJRMp5fBA-Qh-AHFKoKEH9fY4o6hBEzeaLZarDZbTECw6jULEoQiS5ZG6IKkPcp0j6M5lmVn05rvfQWdTvCoWMzcMxBfqSYgQOAyWUEc7KsnZRBoPyEZQqdRmdzmbiuM36fV2L1qVwx1yOdS07r6dw2-nYuXkN0ZK6ehCNVmOZoVVxM01mZ500EDdOQ8lpd05tUIZOswxmX3PMwJkuhhlVl2445gSZZlV1nL+A2eDkmJTdHTtEP6fs1wfQ2EwUcepseNSeCwqSwqVTVcOsrzcZxacPXy1d7jHldhCGD0JbxsU76WX28hkWIyOAe+hTloDy+JUDQMgYtoBEAA */
  context: {},
  id: "red-light",
  initial: "off",
  states: {
    off: {
      on: {
        POWER_ON: {
          target: "on",
        },
      },
    },
    on: {
      initial: "green",

      states: {
        green: {
          after: {
            "10000": {
              target: "orange",
            },
          },
        },
        orange: {
          after: {
            "3000": {
              target: "red",
            },
          },
        },
        red: {
          after: {
            "10000": {
              target: "green",
            },
          },
        },
      },

      on: {
        POWER_OFF: "off"
      }
    },
  },
});

