const food_items = [
    {
        "id": 1,
        "food_name": "Aloo Paratha",
        "category": "Breakfast",
        "type": "Veg",
        "quantity": 20,
        "image": "https://images.unsplash.com/photo-1580064003296-29deb3521370?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 79
    },
    {
        "id": 2,
        "food_name": "Omelette Toast",
        "category": "Breakfast",
        "type": "Non-Veg",
        "quantity": 18,
        "image": "https://plus.unsplash.com/premium_photo-1691054888116-934e75064fb1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 99
    },
    {
        "id": 3,
        "food_name": "Vegetable Soup",
        "category": "Soups",
        "type": "Veg",
        "quantity": 15,
        "image": "https://plus.unsplash.com/premium_photo-1700673590238-a0e3a3795ae2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 89
    },
    {
        "id": 4,
        "food_name": "Chicken Clear Soup",
        "category": "Soups",
        "type": "Non-Veg",
        "quantity": 12,
        "image": "https://imgs.search.brave.com/YusMZ1vyWxlBJ47fpWUbyC_Un37O4RzWqjkrlwtq6IM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/eXVtbXl0dW1teWFh/cnRoaS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDcv/Y2hpY2tlbi1jbGVh/ci1zb3VwLTEuanBn",
        "price": 119
    },
    {
        "id": 5,
        "food_name": "Paneer Butter Masala",
        "category": "Main Course",
        "type": "Veg",
        "quantity": 10,
        "image": "https://imgs.search.brave.com/kWqt-4HjWovwCPjfmX2UFtK6A7B0ShBn1rQQ8U9hJOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFuaGVhbHRo/eXJlY2lwZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzA3L3BhbmVlci1i/dXR0ZXItbWFzYWxh/LndlYnA",
        "price": 249
    },
    {
        "id": 6,
        "food_name": "Mutton Rogan Josh",
        "category": "Main Course",
        "type": "Non-Veg",
        "quantity": 6,
        "image": "https://imgs.search.brave.com/OUDW_CeRk9PvQmbup2aygP8XryAHO8CSKRyIYy4Fi2A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hpc2thZmZhaXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE5LzAyL011dHRv/bi1Sb2dhbi1Kb3No/LTItMS5qcGc",
        "price": 399
    },
    {
        "id": 7,
        "food_name": "White Sauce Pasta",
        "category": "Pasta",
        "type": "Veg",
        "quantity": 14,
        "image": "https://imgs.search.brave.com/gMtLd0KsdPiVSiF7CgxZwRCHl0gC97cLhz7r28TxGkc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saWxs/dW5hLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8xMS93/aGl0ZS1zYXVjZS1w/YXN0YS1yZXNpemUt/NS5qcGc",
        "price": 199
    },
    {
        "id": 8,
        "food_name": "Chicken Arrabbiata Pasta",
        "category": "Pasta",
        "type": "Non-Veg",
        "quantity": 10,
        "image": "https://imgs.search.brave.com/OhVF5PbNQYxe4w3r7f9Djxcr21_Cawj8dzuT81mipEA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/am9jb29rcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDEvdG9tYXRvLXNw/aW5hY2gtY2hpY2tl/bi1wYXN0YS0xLTkt/NzUweDk3NS5qcGc",
        "price": 249
    },
    {
        "id": 9,
        "food_name": "Farmhouse Pizza",
        "category": "Pizza",
        "type": "Veg",
        "quantity": 11,
        "image": "https://imgs.search.brave.com/C4sQkPj0SP8zuTiDSiEsbVqryoi9oTbwntCsIp45mtc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50Lmluc3RydWN0/YWJsZXMuY29tL0ZW/US8yVDAwL0tBNUNW/OEFSL0ZWUTJUMDBL/QTVDVjhBUi5qcGc_/YXV0bz13ZWJwJmZp/dD1ib3VuZHMmZnJh/bWU9MSZoZWlnaHQ9/MTAyNCZ3aWR0aD0x/MDI0YXV0bz13ZWJw/JmZyYW1lPTEmaGVp/Z2h0PTMwMA",
        "price": 299
    },
    {
        "id": 10,
        "food_name": "Pepperoni Pizza",
        "category": "Pizza",
        "type": "Non-Veg",
        "quantity": 8,
        "image": "https://imgs.search.brave.com/qiqXsq-xUpbvPXmK-6os3x4UjEmJI5oIJvk3fKkRGUI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE2LzY4LzQx/LzM2MF9GXzIxNjY4/NDE4NV9Ub0ZGdUxu/ZnVmMHZBV1Aweklh/c1JXVUtkRUtqblNW/Ni5qcGc",
        "price": 349
    },
    {
        "id": 11,
        "food_name": "Classic Veg Burger",
        "category": "Burger",
        "type": "Veg",
        "quantity": 20,
        "image": "https://imgs.search.brave.com/LmKjo6fjAMhxcfy9QEcmAVp7r_0yqiOSMiet08BoXdU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92ZWdu/ZXdzLmNvbS9tZWRp/YS9XMXNpWmlJc0lq/STVNRFV6TDFabFow/NWxkM011UjJGeVpH/VnBia0pzWVdOclFt/Vmhia0oxY21kbGNp/NXFjR2NpWFN4Yklu/QWlMQ0p2Y0hScGJX/bDZaU0pkWFEvVmVn/TmV3cy5HYXJkZWlu/QmxhY2tCZWFuQnVy/Z2VyLmpwZz9zaGE9/MjEzMmE2NzI2MDZm/YmEzMQ",
        "price": 129
    },
    {
        "id": 12,
        "food_name": "Double Chicken Burger",
        "category": "Burger",
        "type": "Non-Veg",
        "quantity": 17,
        "image": "https://imgs.search.brave.com/iouYfFQ9sZMmz27DAUmuAQUAJf1jinL-vA6X1jkilns/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAzL2Y2/L2UyLzAzZjZlMjhj/NjQ1ZGE2MmQ3MDAz/MWU1MDEwZGJhZDU4/LmpwZw",
        "price": 199
    },
    {
        "id": 13,
        "food_name": "Idli Sambar",
        "category": "Breakfast",
        "type": "Veg",
        "quantity": 25,
        "image": "https://imgs.search.brave.com/6ub30bBF2rNJR0TihML7CaxU7odYJO5QzFSLlBvh7CQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTg4/MTY5NDAwL3Bob3Rv/L2lkbGktc2FtYmFy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1mNldLd0JOTjFn/NXdnVkxHS1kzNTU4/U1ZXOVB5bDZOZ3pJ/TFVMMEVQZXhjPQ",
        "price": 79
    },
    {
        "id": 14,
        "food_name": "Tomato Soup",
        "category": "Soups",
        "type": "Veg",
        "quantity": 18,
        "image": "https://imgs.search.brave.com/6MkDKNl_wx18RLUicUXI6pvvGJj6_VRA7_HVJXuv7-0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib3dsLXRhc3R5/LXRvbWF0by1zb3Vw/LWRhcmstd29vZGVu/XzE4NTE5My0yNDQz/OC5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQw",
        "price": 99
    },
    {
        "id": 15,
        "food_name": "Palak Paneer",
        "category": "Main Course",
        "type": "Veg",
        "quantity": 9,
        "image": "https://imgs.search.brave.com/qN6v8hWdOLMyWgRxh55v7ayaoamSNmBZ_vQFbRlk5zo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jaGVmZGVob21l/LmNvbS83NTAvMC8w/L3NhYWctcGFuZWVy/L3Jlc3RhdXJhbnQt/c3R5bGUtaW5kaWFu/LXNhYWctcGFuZWVy/LWNoZWZkZWhvbWUt/NC5qcGc",
        "price": 229
    },
    {
        "id": 16,
        "food_name": "Butter Naan",
        "category": "Main Course",
        "type": "Veg",
        "quantity": 30,
        "image": "https://imgs.search.brave.com/9dQivjJPqJ8DiS7Rej7OQ4P0JC6tB8j4Jp8IW1WMWys/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGFsZmJha2VkaGFy/dmVzdC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDIv/SGVyYmVkLUdhcmxp/Yy1CdXR0ZXItTmFh/bi0xLTcwMHgxMDUw/LmpwZw",
        "price": 45
    },
    {
        "id": 17,
        "food_name": "Mac & Cheese",
        "category": "Pasta",
        "type": "Veg",
        "quantity": 13,
        "image": "https://imgs.search.brave.com/4SeMZrj9mEJvhvsuAiy5xRkeIOVOrZ5i0IsaP3iEdJE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTYx/NDY2MDQ5Ni9waG90/by92ZWx2ZXR5LW1h/Yy1hbmQtY2hlZXNl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1kMFVjcjFTcTAt/aXUyNTRWU1pzeTZx/ZTVqczNRNHkwT1l3/UFBTazJOeTBZPQ",
        "price": 189
    },
    {
        "id": 18,
        "food_name": "BBQ Chicken Pizza",
        "category": "Pizza",
        "type": "Non-Veg",
        "quantity": 10,
        "image": "https://imgs.search.brave.com/sDK_MNNu3PBGDRSN4YN2Q5eLz2qLro2Zj0Gnt7vrElk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zYWxs/eXNiYWtpbmdhZGRp/Y3Rpb24uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE0LzAz/L2JhcmJlY3VlLWJi/cS1jaGlja2VuLXBp/enphLTIuanBn",
        "price": 359
    },
    {
        "id": 19,
        "food_name": "Paneer Burger",
        "category": "Burger",
        "type": "Veg",
        "quantity": 15,
        "image": "https://imgs.search.brave.com/sdGOm-zAygadxsUOiTL5vJRh-MPw65NpelWsdigpOCs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzaGJ5cmlzaC5j/by51ay93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wOC9EU0Mw/MDAxOS5qcGc",
        "price": 159
    },
    {
        "id": 20,
        "food_name": "Cheesy Egg Burger",
        "category": "Burger",
        "type": "Non-Veg",
        "quantity": 14,
        "image": "https://imgs.search.brave.com/fHon5kxrfjtBwFdAmNi7aG_iM8P5I_fQE6TWjt8pclY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZmxhZXZv/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMTAvRWdn/QmFjb25DaGVlc2VC/dXJnZXJSZWNpcGUu/anBnP3Jlc2l6ZT0x/MTQ3LDE1MDYmc3Ns/PTE",
        "price": 179
    }, {
        "id": 21,
        "food_name": "Masala Dosa",
        "category": "Breakfast",
        "type": "Veg",
        "quantity": 25,
        "image": "https://imgs.search.brave.com/f841JYjRpfDVDWhktD_5QcyHzF-RwZ25D1AArw6dm6k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzEwLzA0LzA2/LzM2MF9GXzYxMDA0/MDY5NV8zN0pDU0do/RFdMb2hXU1BXdDY4/bUM0NFF0MU5SQ2gz/Wi5qcGc",
        "price": 89
    },
    {
        "id": 22,
        "food_name": "Poha",
        "category": "Breakfast",
        "type": "Veg",
        "quantity": 30,
        "image": "https://imgs.search.brave.com/oTDA6kpka1H-7u94YTaRGilA9Un4EYjQkpjkLe2UA4k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29va3dpdGhtYW5h/bGkuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE0LzA4L0Fs/b28tUG9oYS1ub3Rp/dGxlLWN3bS5qcGc",
        "price": 49
    },
    {
        "id": 23,
        "food_name": "Paneer Sandwich",
        "category": "Breakfast",
        "type": "Veg",
        "quantity": 15,
        "image": "https://imgs.search.brave.com/szSqLHmTYtzYQ44s1q2fDeuy8x6BJadEXf9RRM5N0HQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYWNo/bmFjb29rcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDMvcGFuZWVyc2Fu/ZHdpY2g2LmpwZw",
        "price": 69
      }
];
  

export default food_items;