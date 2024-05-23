import { atom, selector } from 'recoil';

export const networkAtom = atom({
    key: "networkAtom",
    default:102
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

export const notificationsAtom = atom({
    key:"notificationsAtom",
    default:12
});

export const messagesAtom = atom({
    key:"messagesAtom",
    default:0
});

export const sumofAllSelector = selector({
    key: "sumofAllSelector",
    get: ({ get }) => {
        const networkCount = get(networkAtom);
        const jobsCount = get(jobsAtom);
        const notificationsCount = get(notificationsAtom);
        const messagesCount = get(messagesAtom);
        return networkCount + jobsCount + notificationsCount + messagesCount;
    },
});