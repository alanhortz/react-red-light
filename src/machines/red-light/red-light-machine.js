import { createMachine } from "xstate";
 export const RedLightMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QCdIFoA2BLKALALgHQD2AZqQMQAKA8gOoCiASgPo0ByA2gAwC6ioAA7FYWfFmIA7ASAAeiAIwAmAKyEAbCoAcW9dwDMSrUu4KALAHYANCACeiLQsKGlATn0KV+7if1aLAL4BNqgQmDgEJJKEUKhgkhSysPgAhvhghCmk6cgAFArchdwAlBSh4XhEUjFxkjz8SCDCouJSMvIICv6Ebq5mWmb6XhYKCjb2CF5OI+pdqj6zFq5BIejYlVEkyCmSMInJaRlZObnehaXl65HVxNu7YPUyzWIS0o0dZgquPSquBZ8KdRKYF9caIKaEGZzFQLBRLFYgS4RKrRUL7VLpTLZMB5ApFC5rZGbUKPRrPVpvUAfL4-P7cAFAkFmMEIAGESwKfQWdQjVzcCxmekIpEbKTUejMNgAMSlpKEIhebXeiG+-kGMPUWl+BiU6nULKUZiU7IKWncfPMSwsgQRkmIEDgMhFBCeCop7UQaD8hGUKnUZnc5m4rh5+mZdk9alc0dcAxM0c5jmWwURhNF5FdLVeHtZShZjnZfNcwO5Zn6-2FaeulKabuzyoQ+lcLMMZh9-TM-sNFj8qhUlbCVxRNTA8UziprHX8LM+agsJiUSx0ZuD+gHFWrWx2MHH7obHjUngsKksKlUerDLK83GcWjDd4Fne4Z-XQ+JkF39ap4MsPrhgPnHQ4S8Gcuh6XwdUNQEDCCIIgA */
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

