import { Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const sponsors = [
  {
    name: "Central Coalfields",
    image:
      "data:image/png;base64,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",
    tier: "Gold",
  },
  {
    name: "Adani",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEBUSEBATFRUXGBYYGBMXFxUVGRoXFRUWGBgYGBkaHSggGBolHxcaITEiJSkrLi46Fx8zODMsOSgtLisBCgoKDg0OGxAQGy0lHyYtLS0rLy0uLy0tKy0tLS0tLSstLy0vLS8tLy0tLS0tLS0tLS0tLS0tLS0tLi0tLS4tLf/AABEIAIUBfAMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABwUGAQIECAP/xABJEAABAwIBBwcHCQYFBQEAAAABAAIDBBEFBgcSITFBcTVRYXJzgbMTIjSRobGyIzJCUmKCg5LBM1NjosLRFCREk/AlQ8PT4dL/xAAaAQABBQEAAAAAAAAAAAAAAAAAAQIDBAUG/8QANBEAAgECAgcFCAMBAQEAAAAAAAECAwQRMQUhMjNBUXESgaGx8BMUQlJhkcHRIjTx4RUj/9oADAMBAAIRAxEAPwB4oAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQBgm2soAXGOZ0Qx5ZSQtkaNXlXkgO6rRrt0kjgtGnYYrGbw+hC63I7Mls47KmVsNTGInuIDHg3YXHY031tJ2DbfoTK1k4LtReI6NTHMviokgIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAHxrapkMbpJHaLGAlx6B7z0IHQhKclGObFlieceoe8/4djI2btIabz0nXYcNfEqNyN2loqml/Ntv6ZHVgWcV+mG1jWlh1eUYCC3pc250hwt3pFPmNr6Kj2caT18nxGQ1wIuDcHYQpTCyMoAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQBXs4E7o8NqC02JaG90j2sd7HFWLRY1ojKjwixDrdKqAoHI9H4XMZIInu2ujY48XNBK5yawk0W0dSaAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACAKdnUkcKFobsdKwO6oa9w/ma1IzS0Wl7bXyeHrpiKcKJnQmwTGOQ68iHudh9OXbdCw6rXEN/lAU8Nk5W/SVxPDn/AKTicVAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAFZzk8l1H4fjRqzZ76Pf5EdXYYjVuFVGCgej0XgXosHZR/A1c7U231ZaWR3JgoIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACAOHG8MZVwPgk1Bw2jaCDdrhwIBQS0KrpTU1wE7iuS9XTPLXQPcN0kbXPaRz3A83gbFRtM6WjeUaixUkvo9R1YBkfU1TxpRvijv50j2lpt9hrtbj02t7k1RbG3F/SpR1NN8l+fWI4aWnbExsbBZrWhrRzBosApjmZycpOTzZ9UDQQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAFZzkcl1H4fjRqzZ76Pf5EdXYYjFuFVAUD0ei8C9Fg7KP4Grnam2+rLSyO5MFBAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgDSeZsbS57mtaNZc4gADnJOoJUm3ghG0liypYpnFo4SRHpzH7As38zrX4i6tQs6ks9RQq6Sow1LX0K1WZ0Zz+yp4mdcuk92irMbCPFspT0tN7MUvH9EVPnCxB2yVjOrGz+oFTRsqK4EMtJV3k8O4+TcvcRH+pv+HD+jE/3Kj8vixv/AKNx83gjvpc5lYwjTbDIN92lp7i02HqTJaPpPLFE0dKVVmky0YNnLppiGzsdA47z57PzAXHeLDnVSro+pHXHX5l6jpKlPVLV5F1ika9oc1wc0i4cCCCDsII2hUWmngzQTTWKN0goIAEACAK5lDlpSUJLHvMkg/7UdnOHWN7N4E36CrNG0qVda1LmyvVuYU9Tz5Io+IZ0qlx+QgijH2tKR3sLQPUVfho6C2m34fsqyvZvZSREy5f4i46qkN6BHD/UwqZWVBfD4sb7zVfHyN6fOHiLNszH9aNn9Aamuxovhh3j43FTmTeH51ZRYVFMx3O6NxYe5rr3/MFBPR0fhl9yWNy+KO7KnLGkrsNnZFIWyER/JSDRdqlYTba12oE6idijoWtSnWTa1c+4klVjKLwFWtQhQFA9HovAvRYOyj+Bq52ptvqy0sjuTBTSaVrGlz3BrQLlxIAA5yTsSpN6kBUcVzj0UJIjL53fwx5v53WBHS26tQs6ks9XUXArFbnVnd+xpomddzpPdoqxGxis2/X3HKJEz5xcRdsmYzqxs/qBUitKS4D1BHxbl9iQ/wBXfoMUH6MTvdaPy+LH9iPI76XObXMI0xDIN92Fp7i1wA9RUcrOm8sQ9jFlpwbOfTykNqY3QE/Sv5RneQA4flsOdVp2UlsvEbKg+BeIJ2yND43Nc1wuHNIcCOcEaiFUaaeDIGsD6JABAAgD5VFQyJpfI9rGjWXOIaAOknUEqTbwQqTbwRUcUzk0UJIj05z9gWb+Z1rjpbdTxtZvPUW4WVSWerqVqszqVDv2NNCzrl8nu0FKrWKzZajo+HxNvw/ZFzZw8QdslYzqxs/qul9hBEysaK4eJ8m5d4lf0sno8lB/60jpQ5D/AHOh8vi/2dtNnHrmfOML+sy3wOCjdKIx6Povmu8seFZz4nG1TA6P7bD5RvEtsHDu0lG6XIrVNGSWw8eur14F4oK+KoYJIZGvYfpNN9e8HmPQVG1gZ84Sg+zJYM6UgwEACAKJjOceON5ZTReVANjIXaLSR9WwJcOnV0XGtNcsDWo6KlJY1Hh9P2dWTmXsVVIIpo/IvcbNOlpMcdwvYFpO4H13sEimMudGzpR7cXilnzLinmYCAEtnBxx9TVvj0iIonFjWbtJvmucec3vbo7769rSUIJ8Wc1pC4lUquPBFWKtooGEophOAwnCglQGE4UsmRuVsmHyBriXQE+fHttf6bOZ3RsPqIq3NrGssVtesy7aXkqMsHs+sh3U87ZGNexwc1wDmuGwgi4IWA04vBnRpprFH0SCggBa5wst3Mc6lpH2IuJZmnWDvYw7iN53bBr2alnZpr2k+5fkzrq6wfYh3sWK1TPQJB6BA9AkHoEg9AgejCQkQFA9HovAvRYOyj+Bq52ptvqy0sjuTBRLZy8dkqKt8GkRDCdEMGxzwBpOcN5vcDmt0lbFpSUYKXFiFPVoegQOQJCRAkHowgegSEiLBkjlVLh0gsS+En5SG+rpcz6r/AGHYdxEFajGovrzGzpqa+o9KOqZNG2WNwcx4DmuG8FZEouLwZQaaeDPskEK1ltlW3DY22bpyyX0GE2ADbXc48wuNW033ayJ6FH2j+hYoUPav6CZxjGZ61+nUSuedobsa3qtGocdvOStKEIwWEUa1OnGCwijhCVkpkJjHGwTGORsExioyExjkbBMYqJHBMYmopRJA+x+k062vHM4b+O0blHJYjKtGFWPZl/g7MnMcjr4BLHqOx7DrLHDaDz84O8EKFrA52vQlRn2X3fUlEhCQmWk7o8PqHNNjoaN+uQ0+wpGWbOKlXinzEiFGzqjIPd0pjHIf2FTmSCJ7tro2OPFzQT71OsjjqsVGpKK4NnUlIxR5d5JTx1Ek8MbpIpHF/mAuLXO1uDgNdr3N9mtaltcRcVGTwaOfvrKaqOcFimVqkwKqmdox00rj1HAd7jYDvKtOtCK1tFKFtWk8FFlnw7NlUv1zSxxDmF5HDiBZvqcq07+C2ViXqeiqj22l4k7BmtpwPPqJifs6DfYWuUL0hPgkW46KpcWzd+a6kt5s9QD0mM/0BC0hU5L13ivRVHm/D9FdxzNpPC0vp5BOBr0LaD7dAuQ71g8wKtUtIQk8JLDyKlbRk4rGDx8yjOFjYix5loIzMMNTNU5ANbNFi5khkpnHXEdJnUeTcdztf31j6SpYSU1xN7RlXtQcHwGCsw0yu5d44aGjc9htI/5OPoc4G7vugE8QOdWbSj7Wok8lrZXuq3sqbazyQiSuhMJAkHolsBybqa4/5eO7QbGRx0WA8xdvPQATrUNavTpbT/ZPSpTqbKLjTZqHkfKVjQeZsRd/MXj3KjLSS4R8S5GzfGXgby5pz9CtHAw/qJP0SLSS4x8f+DvdHwfgQuI5t66K5YI5h9h1nep4A9RKmhfUpZ6hHbzX1KpV0skL9CWN8bh9F7S08bHd0q3GSksU8RmDWpnyQPRgoHI9F4F6LB2UfwNXO1Nt9WW1kdyYKKLOJkjO2pfUwRukjkOkQwFzmPsA67RrLTa9xzm9tV9W1uIuCjJ4NCFSpMEqpnaMdNM49m4AcSRYd5VqVWEVi2hyLVhubCrk1zSRQjm1yOHENs3+ZVZ30FsrHwHdonoM1NOB8pUzk/YEbB6i1ygd/LgkHbZ9XZqqTdUVN+kxH/xhJ79PkvH9jvasr+N5sJ4ml9NKJgNegRoPt0ay1x9Smp3sXqksCSNZcShuaQSCCCCQQQQQRqIIOwjmVwsIwkHoaGZ7FyWy0jj835WMfZJtIB0BxafvlUL2GU+4rXUMpDKVAqChzxH/ADkQ/gj2yP8A7LRs9h9TSsth9Shq2X0ZTWOLHhWRNdUgFsBY0/SlPkx+U+f36KrzrQjxIZ3VKGbx6a/+Fjp81MpHylXG07w2Nz/aXN9ygdyuRXekYrKPj/p0PzU6vNrdfTDq8RN94+gi0lzj4/8ACAxrIKspQXhrZmDaY7lwHOWEX/LdKqsWWqV7Sm8Hqf1/ZVwUrLpsExjizZv8ZNLWMBPycxEbxuuT5ju5xtwc5RyRUvaPtKT5rWvyOpRnOkBl7ydPwb4jUjLdj/Yj64CVCjZ1BlNYqHzgHokHYxfA1TRyORuN7Lq/M70pCCABAAgAQAIAEAKDOvhLYapkzAAJmkuA+uwgOPeHN7wTvW1o+q5QcXwMHSdJRmpriUdaKMwtea+p8niTG/vGSMP5dP3sCp6QjjRb5Yfr8mho6WFZLmn+x2LAOhFFner9OrjhB1RR3+9Idf8AK1vrW1o2GFNy5vyMfSE8ZqPJeZRFoFJEnk1hBraqOAEgON3OG5jdbjx3DpIUNer7KDkT0aftJqI/qKkZBG2KJgaxos1o2Af83rnZScni8zdjFRWCPumiggAQBVs5kLXYbM5zWkt8mWkgEtJlYCQdxsSO9WrJtVl64EVbYYkFtlVGCgej0XgXosHZR/A1c7U231ZbWR3JgoIAEACABAAgAQApM7uENinjqGC3lQQ+2zTZazuJabfcWlZVMYuL4FqhLFYFAVwtIsubipMeJwW2P02HgY3EfzBqguVjSYyusabHqsgzhQ54vTYuxHiSLRs9h9TSsth9Shq2X0WnNm0HE4bgHVIe8Ru1qvc7tkF5uX3DxWWYoIAEACAFhnQybbHashbYOdoytGzSd82ToudR5yQecqanLgbGj7hy/wDnLu/QvgnM1TPA26Uxio9CYRV+Xp4pfrxsf+ZoJ96iOVqw7E3Hk2iKy95On4N8RqRk9j/Yj64CVCYzqDZMYo+cA9Ep+xi+Bqmjkcjcb2XV+Z3pSEEACAPlPUsjF5HtaOdzg33pUm8hHJLNnA7KOiH+spv92P8AupPYVPlf2IveKXzL7o3ix6kebNq6cnmEsZPvSOjUWcX9hVXpPUpL7o72PDhdpBHODdR4YEqeIvs8Y+Rpz9t3tb/8Wlo3bl0MvSu7j1FWVsmEWDN+f+p0/Wd4b1WvdxL1xLthv4+uA91zp0ghsvJdPEqk/bDfyMa39F0VosKMTn7t41peuBAKwRIYWZumBnqJN7WMaPxHOJ8MLM0lL+MV9X4f6aOj1/KTGssg1AQAIAEAVnORyXUfh+NGrNnvo9/kR1dhiNW6VEYKQej0XgXosHZR/A1c7U231ZbWR3JgoIAEAfKeoZGLyPa0c7iGj2pUm8gI92U1CNtbTf70f/6UnsKnyv7C9lm0WUNG82bWUzjzCaMn3pHRqLOL+wdl8iQjka4Xa4Ec4II9ijwwEKHnkH+UhP8AG/8AFJ/ZXbHbfT8k9vtMUi0S6iayLP8A1Gm7Vv6qKvu5dBKuwz0AsYzBQ54vTYuxHiSLRs9h9TSsth9Shq2X0WrNjynF1ZfDcq11u2V7zcvuHgswxgQAIAEAQ+V8AkoKlpF/knuHWY0ub7WhOjmie1l2a0X9UIcKZnSmQmMcPLIZ98Op+pb8riP0UbOavFhXl1NMveTp+DfEamsdY/2I+uAlQmM6g2TGKPnAPRKfsYvgaplkcjcb2XV+Z3pSEhspMpYKBl5Td5+bE35zunob0n27FLSoyqPUV7i6hQWMs+Qrsay7rKkkNf5Fn1Y9R73/ADieFh0LTp2lOOetmFW0jWqZPBfT9lYleXEucSSdpJuTxJVpLBaik5NvFmpTxDBSoU3gnfGdKN7mHnaS0+sJXFS1NDozlHWngdNdjFRUMayaZ8jWm40zpEEi3zjr9qbClCDxisCSdepOPZk8UcBUxEWDIDlKn6zvDeq15uJeuJdsd/H1wHuudOkPPeVTr11Uf48o9TyP0XS26wpR6I5yu8asurItSjEM7Mw3zao9MQ9QkP6rJ0m9cV1NXR61SfQZSyzRBAAgAQBWc5HJc/4fjRqzZ76Pf5EdXYYjVulRGCkHo9F4F6LB2UfwNXO1Nt9WW1kdyYKQ+UmUkGHx6UzruN9CNut7rcw3DnJ1ewKalRlVeEQFTjmcCsqSQx/kGbmxnzu+T51+ro8Fp07SnDPW/r+hUVaV5e7SeS5x2ucS4niTrVhatSHo1QPRhA9G8EjozpRuLD9ZpLT6wmtY5j8zrrMZqJ4xFNPJIxp0gHu07OsRfSOvYTv3pkacYvFLAdGKTxRwp5KiZyM5Qpu1aoa+7l0Eq7DPQKxjMFDni9Ni7EeJItGz2H1NKy2H1KGrZeRas2PKcXVk8Nyr3W7ZBebl9w8FlmMCABAAgCPyh9DqOxl8NyVZktHeR6rzPPwU7OoNgmMUd+QXJ1P1XfG5Rs5u938gy95On4N8RqaxbH+xH1wEqExnToymMcPrAPRKfsYvgaplkcjcb2XV+ZplFi7aKnfM7XbU1v1nn5rf79AKlpU3OSiincVlRpubETiNdJUSullcXPcbk+4DmA2ALahFRWCOUq1ZVJOUszmTxhvT075XaMbHPcdjWtLj6hrSuSSxY6EJSeEViTUWReIPFxSP73RtPqc4FQ+9UV8RbVhcP4fIJMicQbtpHdzo3e5ycruj83mK7C4Xw+RGVmD1MNzLTzMA3uY4D12spo1YSyaIZUKsNqLOBSkRgpwFgyA5Sp+s7w3qtebiXriXLHfx9cB7rnTpTz1lP6dVdvN4jl0tDdR6LyObrb2XV+ZGKUaho5mf2dT1o/hcsjSece81tH7Muox1mGgCABAAgCs5yOS5/wAPxo1Zs99Hv8iOtsMRq3SojBSD0ei8C9Fg7KP4Grnam2+rLayNcfxZlFTvnk1ho1N3ucdTWjiSOG1LSpupJRQNiBxXEZaqZ00ztJ7j3AbmtG5o3D9brdhBQj2YiI5Eo5G8ELpHBsbHPcdjWguceAGspG0liyRE3DkXiDxdtHJ94xsPqe4FQO5pL4hVJGz8iMRbto39z4ne55R7zS+bzHqceZG1eC1MN/K00zAN5jfo/mtb2p6qQlk0SKSfE4Ab7E4kQIHomcjOUKbtWqGvu5dBKuwz0CsYzRQ54vTYuwHiSLSs9h9TSsth9Shq0XkWrNjynF1ZPDcq91u2QXm5fcPBZZjAgAQAIAj8ofQ6jsZfDclWZLR3keq8zz8FYZ05sFGxyHfkFydT9V3xuUbObvd/IMveTp+DfEamsWx/sR9cBKhMZ06MpjHIfWAeiU/YxfA1TLI5G43sur8xf53a8mWGAHU1pkI5y4lre8Bp/MtGyjqcjndL1dcafeL5aBjElk3g7q6pZC02B1ud9Vg2njuHSQo6tVU4ORZtaDrVFD7jwwjCIaSMRwRho3n6TjzuO0lY06kpvGTOopUYUo9mCwO5MJAQAIAXGd+ljbHC9sbA4vcC4NAcRo7CdpC09HSbk1jwMnSkV2E8NeIrytgxCwZAcpU/Wd4b1WvNxL1xLljv4+uA91zp0ogMso9HEKkfxXH83nfqujtnjRj0OduVhWl1IZTkaGTmYl86qb0Qkd3lQfeFl6TWqL6/g1NHvaXT8jPWSaQIAEACAKznI5Ln/D8aNWbPfR7/ACI62wxGrdKaMFIPR6LwL0WDso/gaudqbb6suLIX2eTEDeCnB1WdK4dPzGf1q/YQzl3evAbIWq0QRIYBhL62pjgYbF51u26LQLud3Ad5sN6jq1FTi5Meh74HgcFDH5OCMN+s463OPO528+wbrLEqVZVHjJgSSjAEACAF3nipYxTxSCNgeZgC8NAcR5OQ2LttrgG3Qr1k32mvoWKD1sVK0S2iZyM5Qpu1aoa+7kJV2GegVjGaKHPF6bF2I8SRaVnsPqaVlsPqUNWi8i1ZseU4urL4blXut2yC83L7h4LLMYEACABAEflD6HUdjL4bkqzJaO8j1XmefgrDOnNgmMcO/IHk6n6rvjconmc3e7+QZe8nT8G+I1IxbH+xH1wEqExnTmVGxyH1gHolP2MXwNUyyORuN7Lq/MVmdHlA9my3tWrZ7s5bSu/7kVFXDNLxmjcP8XKD87yJtwD2X/RU77HsLqa2iMPaS54DYWWb4IAEACAF7ni/YQdo74VpaN25dDL0ru49RVFbKMIsGQHKVP1neG9VrzcS9cS5Yb+PrgPdc6dKJPOhR+TxF7t0jGPHq0D7WX71vWE+1RS5avyYV9Hs1sef+FTVwrItObbFRTV7NI2bKDETuBcQWH8wA+8qd7T7dJ4cNZcs59ioseOod6wTaBAAgAQBWc5HJc/4fjRqzZ76Pf5EdbYYjVulNGCkHo9F4F6LB2UfwNXO1Nt9WXFkKnO5yg3sI7f7kv8A9WpY7rv/AEMlmUpXBUXXNGQMQdffBIBx04j7gVTvt13/ALHjkWQAIAEACAKBnk9Eh7ceFKrtjtvp+UT0NpikWkXETORnKFN2rVDX3chKuwz0CsYzRQ54vTYuxHiSLSs9h9TSs9h9Shq0XkWrNjynF1ZfDcq91u2QXm5fcPBZZjAgAQAIAj8ofQ6jsZfDclWZLR3keq8zz8FYZ05sExiod+QPJ1P1XfG5RPM5y938gy95On4N8RqQWx/sR9cBKhMZ05lMY5D6wD0Sn7GL4GqVZHI3G9l1fmLzO5RETwzbnMLDxY4n2h/8q0rKWpxOb0vT/lGf0wKCrxkEhk/izqKoZOwX0T5zdmk06nN9Wzpsm1aaqRcWT21Z0aimh44Pi8NZGJIHhw3j6TTzOG4rFqU5QeEkdTSrQqx7UGd6YSggDWR4aCXEADaSbAcShLEG8BVZ0MoaeqEcUD/KFji5z2/M1i1g76Xdq6VsWFCcG5SWGJiaRuKc0oReOAv1pGSWDIDlKn6zvDeq95uJeuJcsN/H1wHuudOlKHnawgy0zKhgu6EkO7N9gT3ODe4uWjo6r2ZuD4+Zn6QpdqCmuHkKNbJkIEhIhpZHZxGFjYa52i8ahOdbXDdp/Vd07D0LJubF49qnly/RqULtNdmf3GDTVLJWh0b2vadjmuDge8LNlFxeDReTTWKPqkFIbFcqqOlv5Wpj0h9Bp03/AJW3I71NTt6s9lEcqsI5sW+WWXxrYnU8MWhE62k5+t7tFwcLAGzRcDee5aVvZ+zfak9ZXnW7WpFIV4jRgpB6PReBeiwdlH8DVztTbfVlxZC7zyUJEkE4GotdET0tOmwd93+paFhPU4942QuFoCI7cFxN9JURzx63MN7bAQQQ5p4gkdCjqQU4uLJEPnAcdgroxJA8H6zDqew8zm7uOw7rrEqUpU3hICTUYAgDD3BoJJAA2k6ggBV508o6apjjggk8o5kmm5zdbAAxzbB2xx87dcajrWjaUZwblJYFmjBp4sXSvFpEzkZyhTdq1Q193LoJU2GegVjGaKHPF6bF2I8SRaVnsPqaVnsPqUNWi6i1ZseU4urL4blXut2yG83L7h4LLMYEACABAEflD6HUdjL4bkqzJaO8j1XmefgrDOnNgmMUd+QXJ1P1XfG5RPM5y938gy95On4N8RqQWx/sR9cBKhMZ05lMY5D6wD0Sn7GL4GqVZHI3G9l1fmc2VmCiupXRag/50ZO57b27jcg8SpqNT2c8SjdUFWpuHHh1EXUQOje5j2lrmkhzTtBG0LZi01ijlJRcG4yzPkniH0p6h8TtKN7mO+s1xafWNaHFSWDQ6E5QeMXgTcWW+IMFhVO72xuPrc0lRe6UX8PmW1pC4XxeCCTLnEXCxqj3MiHtDEqtKPy+Yv8A6Fw/i8EQ9fiU1QflppJNd/Pc5wHAE2Hcp4U4w2VgV51qlTabZxqVEZhKhS05tKF8uIRvaDoxaTnu3AFjmtHEkjV0HmVS+mo0WnxL+joOVZNZIdywDojSeJr2uY8BzXAtc06wQRYg9FkqbTxQjSawYicscmn4fOW6zE4kxP6PquP1h7dvDoLa4VaOPHiYVxbujL6cCAVghQIJEZjcWm7SQecGx9YSPXqY+OrWj6TVL3iz5HuHM5znD2lNUUskSYt5nxASjkZSD0CCRHThuHS1UrYYGFz3btwG9zjuaN5TJzjBdqWQ+Kb1I9E0cAijZGDcMa1t+qAP0XOyeLbLpH5U4K2upXwEgE62OP0Xt1tPDceglSUarpzUhGsRA1dM+GR0cjS17CWuadoI/wCXvvuCt1SUlishiPkgkRvBM+NwfG9zHDY5ri1w4EawkaTWDHonYMt8RYLNrH2+02N59bmkqB21J/D5jkkbSZd4k7Uat3dHCPaGXSe60vl8xyjEh6/E56j9vPLJvs97nAcGk2HcFLGEY7KwJIpLI5EpIgQSIseb2hfNiMOg0kRu8o87mtaDa/E2A48VXuZJU3iMrNKDHusgzxQ54vTYuxHiSLSs9h9TRs9h9Shq0XkWrNjynF1ZPDcq91u2Q3e5fcPBZZjAgAQAIAj8ofQ6jsZfDcljmS0d5HqvM8/BWWdObBRsUd+QPJ1P1XfG5RPM5y938gy95On4N8RqQWx/sR9cBKBMZ05smMch9YB6JT9jF8DVKsjkbjey6vzO9KQlYyuyOirxptIjmA1PtqdbYHjfx2jp2KxQuHT1cCld2UK6xylz/YqcZyfqaMkTxOA/eDzmHg4au42PQtSnWhPZZgVrWrRf8lq58CKUyK5hOFMJwGClFO/DMFqao/IQSPH1gLN73mzR60ydaFPaeBPTt6lTZiXbAs17iQ6slDR+6j1n7zyLDgAeKo1dIrKmu9mlR0XxqPuQxcMw2GljEcEbWNG4bzzknW49J1rMnUlUeMnia1OnGmuzFYI60weCAOXE8OiqonRTsD2O2g+wg7QRzhPhUlCXai9Y2cIzXZlkKbKXN1UU5L6a88XMLeVaOlv0+LdfQtihfwnqnqfgZVWynDXHWvEpcjS0lrgQ4bWkEEcQdYV1a1iitk8GYQOQIJECQejqw/DZqk2ghfIdnmNJA4nY3vKZOcYbTwJIpyyLtgea+Z9nVkgib+7YQ9/Au+a3u0lRq38VqgsfXrkWYUHxGRg2CwUTNCniDBvO1zjzucdbu9ZtSrOo8ZMsxio5EgoxQQBWcsMjosRGlfycwFmygXuPqvH0h7R6wbNC5lS1ZoRoUWOZN1VET5eEhv71vnRn7w2cHWPQtSnWhU2X+wREqUegSD0CCRGEg9HbhuEVFUbU8EknS1p0e9580d5TJ1Iw2ngO7SWZd8CzXSOs6slDB+7j853AvPmt7g7iqdS9WUERyuEtkZGEYTBRx+Tp4msbvttJ53OOtx6SqM5ym8ZMryk5PFncmDReZ2cAkmbHVRNLvJgtkaBc6BNw4Dmab3619gKu2lRRbi+JctKii3F8RTgrQNNDEzSYE90xrHtIja0tjJFtNzrXc3naBcX53dBVK7qLDscSne1Uo9hZjXWeZgIAEACAPlUwCRjmO2OaWng4WPvQLFtPFCBxjCZaOZ0MwsRsdawe3c9vOD7Nm0KzinrR09KrGrHtR/w+FHSvmkbHEwve42a0bT/Yc52BMY+UlFdqTwQ+8Cw//C00UN7ljACRsLvpEdBN1Czma1T2lRz5sxj+H/4qmlhBAL2kAnYHbWk9FwEBQqezqRnyYiaiB8T3RyNLXtNnNO0H/m/ems6uMlJKUXimfbDaCSplbDE273eoDe48zRvTMMQqVY0oucsl6wH3SQCKNkbdjGtaODQAPcpTkZycpOT4n1QNBAGCL7UAQ9ZkpRTX06WK52lo0D62WKmjXqRykV52tGecURzs3uHn/suHCST9XKT3ytz8CL/zrf5fFm0eQGHD/Tk8ZJf0cj3ytz8EC0fbr4fFkpSZOUcJBjpYQRsdoNJ/MblRSr1JZyZPG3pRyivsSgURMCABAAgAQAIAEAceIYXBUC08EcnNpsa63Akak+FScNltDZQjLaWJBz5v8Oeb/wCHLerJK0erSsFYV7XXHwRC7Wk+HmfNubnDhtheeMsv6OS+/Vufgg91pcvFkhSZIUEVtGjiNthePKH1vuVFK5qyzk/IkVGC4E0xgaLAAAbANQUBIbIAEACABAAgAIQBC12SdDOSZKSK52ua3QJ4lliVNGvUjlJhiRrs3OHHZC8cJZf1cVJ75V5+CHdpmY83eHDbA48ZZv0ck97q8/BB22SlHkvRQkGOkhBGxxYHOH3nXKjlWqSzkw7T5ksBbYohplAAgAQAIAi5cnKN7/KOo6cvvcuMTCSec6tZ6VIqs0sMWSKtUSwUn9yTaLCwFhzKMjMoAEACABAAgDnraCKdujNEyRu2z2hwvz6xtSp4ZD4VJQeMXh0PnQYXBT38hBHHfboMa2/Ega0NtizqzntNvqdiQjBAHBiWDU9TYzwMeRqDiPOA5g7aAglp16lPYk0b4dhcFMCIIWR326IAJ4nae9AlStOptts7EEZ//9k=",
    tier: "Gold",
  },
  {
    name: "BCCL",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995308/bccl_w30lbh.jpg",
    tier: "Silver",
  },
  {
    name: "Jharkhand Tourism",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/jh_tourism_kshayx.jpg",
    tier: "Silver",
  },
  {
    name: "SBI",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/sbi_ord5zl.png",
    tier: "Silver",
  },
  {
    name: "SECL",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/secl_r1vmoe.png",
    tier: "Bronze",
  },
  {
    name: "Essar Oil",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/essar_oil_xok7pz.png",
    tier: "Bronze",
  },
  {
    name: "Tata Steel",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/tata_steel_s8nw20.png",
    tier: "Gold",
  },
  {
    name: "ONGC",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/ongc_lcwi8k.png",
    tier: "Gold",
  },
  {
    name: "Coal India",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/coal_india_eucoix.png",
    tier: "Silver",
  },
  {
    name: "Skoda",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/skoda_p0wqmu.png",
    tier: "Silver",
  },
  {
    name: "Canara Bank",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/canara_sye86r.png",
    tier: "Bronze",
  },
  {
    name: "SAIL",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995311/sail_rzbrgs.png",
    tier: "Bronze",
  },
  {
    name: "Power Grid",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/powergrid_ysetpi.png",
    tier: "Silver",
  },
  {
    name: "MG Motors",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/mg_xuoimg.png",
    tier: "Bronze",
  },
  {
    name: "DeHaat",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/dehaat_io8otn.png",
    tier: "Bronze",
  },
  {
    name: "Park Lane",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1703006562/parklane_n7rljx.jpg",
    tier: "Silver",
  },
  {
    name: "Lazzy Frog",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/lazzy_frog_wjwudq.jpg",
    tier: "Silver",
  },
  {
    name: "Coal Capital",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1703006562/coal_capital_jf6juf.png",
    tier: "Bronze",
  },
  {
    name: "Eng Parcel",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/eng_parcel_zdfb7v.png",
    tier: "Silver",
  },
  {
    name: "Realme",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995311/realme_cgy4n5.png",
    tier: "Silver",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const SponsorCard = ({ sponsor, index, tier }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleTouchStart = () => {
    setIsFlipped(true);
  };

  const handleTouchEnd = () => {
    setIsFlipped(false);
  };
  const getMetallicBackground = (tier) => {
    switch (tier) {
      case "Gold":
        return "data:image/jpeg;base64,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";
      case "Silver":
        return "data:image/jpeg;base64,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";
      case "Bronze":
        return "https://polishedmetals.com/wp-content/uploads/2020/09/Bronze-shutterstock_1681180837.jpg";
      default:
        return "linear-gradient(45deg, #C0C0C0, #E8E8E8)";
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateY: -15,
      transformOrigin: "center center",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <motion.div
      class="card"
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="perspective-1000 h-[300px] w-[300px]"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div
        className="relative w-full h-[400px] preserve-3d cursor-pointer flex justify-center"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{}}
      >
        {/* Front of card */}
        <div className="absolute w-[300px] h-[100px] backface-hidden ">
          <div
            className={`h-full rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 border-2 ${getBorderColor(tier)}`}
          >
            <div className="relative flex justify-center h-[300px] overflow-hidden rounded-xl">
              <motion.img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-[300px] h-[300px] object-fit"
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-serif">
                  {sponsor.name}
                </h3>
                <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20">
                  {sponsor.tier}
                </span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-[300px] h-[300px] backface-hidden rotate-y-180 rounded-xl shadow-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${getMetallicBackground(tier)})`,
            // backgroundImage: `url('https://t3.ftcdn.net/jpg/08/88/59/26/360_F_888592671_ttZvsKBo90wvhHYfCDiUalxBoE40de5C.jpg')`,
            backgroundSize: "200% 200%",
            animation: "shine 2s linear infinite",
          }}
        >
          <div className="h-full w-full flex items-center justify-center p-6 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">
                {sponsor.name}
              </h3>
              <p className="text-white/90 font-medium">{tier} Sponsor</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const getBorderColor = (tier) => {
  switch (tier) {
    case "Gold":
      return "border-amber-400";
    case "Silver":
      return "border-gray-400";
    case "Bronze":
      return "border-orange-700";
    default:
      return "border-gray-400";
  }
};

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(https://i.pinimg.com/474x/f3/87/95/f38795c1ed801dfb3645858eadd44187.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.9)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 pb-32">
        <AnimatePresence>
          {mounted && (
            <motion.div
              className="text-center mb-16 transform-origin:center"
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              exit={{ scale: 0 }}
            >
              <motion.div
                className="flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Building2
                  style={{ marginTop: "20px" }}
                  className="h-12 w-12  text-[#8B4513]"
                />
              </motion.div>

              <motion.h1
                className="text-3xl font-bold text-[#8B4513] sm:text-6xl mt-2"
                style={{ fontFamily: "'MedievalSharp', serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                PAST SPONSORS
              </motion.h1>

              <motion.p
                className="mt-4 text-xl text-[#8B4513] italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Honoring Our Distinguished Supporters
              </motion.p>

              <motion.div
                className="mt-4 w-24 h-1 bg-[#8B4513] mx-auto rounded"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {["Gold", "Silver", "Bronze"].map((tier) => (
          <div
            key={tier}
            className="mb-16 flex flex-wrap flex-col justify-center"
          >
            <motion.h2
              className="text-2xl font-medieval text-[#8B4513] mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {tier} Sponsors
            </motion.h2>

            <div
              className={`grid grid-cols-1 sm:grid-cols-2 px-[8vw] ${tier == "Gold" ? "lg:grid-cols-4" : "lg:grid-cols-3"} lg:px-0 gap-8`}
            >
              {sponsors
                .filter((sponsor) => sponsor.tier === tier)
                .map((sponsor, index) => (
                  <SponsorCard
                    key={sponsor.name}
                    sponsor={sponsor}
                    index={index}
                    tier={tier}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
