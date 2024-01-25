interface Useres {
  readonly id: number;
  name: string;
  email: string;
  googleId?: string;
  freeTrial(): string;
  couponDetails(couponName: string): number;
}
interface Useres {
  githubId: string;
}
interface Admins extends Useres {
  role: "admin" | "tl" | "learner";
}
let newAd: Admins = {
  id: 1,
  githubId: "12jndls",
  role: "admin",
  name: "Nischal",
  email: "nischalkshaj5@gmail.com",
  freeTrial: () => {
    return "2 days";
  },
  couponDetails: (couponName: string) => {
    couponName = "welcome offer";
    console.log(couponName);
    return 10;
  },
};
console.log(newAd);

let newUr: Useres = {
  id: 1,
  githubId: "12jndls",
  name: "Nischal",
  email: "nischalkshaj5@gmail.com",
  freeTrial: () => {
    return "2 days";
  },
  couponDetails: (couponName: string) => {
    couponName = "welcome offer";
    console.log(couponName);
    return 10;
  },
};
console.log(newUr);
