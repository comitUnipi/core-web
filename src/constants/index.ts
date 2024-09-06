import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { TfiEmail } from "react-icons/tfi"

export const navitems = [
    {
        title: "Tentang Kami",
        href: "/tentang-kami"
    },
    {
        title: "Kegiatan",
        href: "/kegiatan"
    },
    {
        title: "Struktur",
        href: "/struktur"
    }
]

export const contactitems = [
    {
        title: "comit.unipi@gmail.com",
        href: "mailto:comit.unipi@gmail.com",
        icon: TfiEmail
    },
    {
        title: "comit.ipem",
        href: "https://www.instagram.com/comit.ipem",
        icon: FaInstagram
    },
    {
        title: "Pos Bitung, Jl. Raya Serang No.Km. 10, Kadu Jaya, Kec. Curug, Kabupaten Tangerang, Banten 15810",
        href: "https://www.google.com/maps/place/Universitas+Insan+Pembangunan+Indonesia/@-6.2224685,106.5578429,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69fe74eed2a5d1:0x10c2f57db3bc5d23!8m2!3d-6.2224685!4d106.5604232!16s%2Fg%2F1pzv6krgv?entry=ttu",
        icon: ""
    },
]

export const activity = [
    {
        img: "/pelatihan.jpeg",
        title: "Pelatihan Rutin",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatibus magnam culpa dignissimos!"
    },
    {
        img: "/data_analyst.JPG",
        title: "Workshop Data Analyst",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatibus magnam culpa dignissimos!"
    },
    {
        img: "/arduino.JPG",
        title: "Workshop Arduino",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatibus magnam culpa dignissimos!"
    },
]

export const mentor = [
    {
        img: "/1.jpeg",
        divisi: "Programming",
        name: "Idham Mubarok",
        desc: "Mentor Programming",
        sosmed: [
            {
                title: "instagram",
                icon: FaInstagram,
                href: ""
            },
            {
                title: "LinkedIn",
                icon: FaLinkedin,
                href: ""
            },
            {
                title: "Github",
                icon: FaGithub,
                href: ""
            }
        ]
    },
    {
        img: "/1.jpeg",
        name: "Nama Mentor",
        divisi: "Graphic Design",
        desc: "Mentor Graphic Design",
        sosmed: [
            {
                title: "instagram",
                icon: FaInstagram,
                href: ""
            },
            {
                title: "LinkedIn",
                icon: FaLinkedin,
                href: ""
            },
            {
                title: "Github",
                icon: FaGithub,
                href: ""
            }
        ]
    },
]