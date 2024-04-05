import mongoose, { model, Schema } from "mongoose";

const categorySchema = new Schema({
  name: String,
});

export const CategoryModel =
  mongoose.models.Category || model("Category", categorySchema);

  [
    {
        "id": 1,
        "category": "Main Dish",
        "foodName": "Main Pizza",
        "price": 348000,
        "imagePath": " https://res.cloudinary.com/ddljhjbk2/image/upload/v1711717846/licensed-image_1_gotm2o.jpg",
        "ingredients": [
            "Dough",
            "Tomato Sauce",
            "Cheese",
            "Toppings of choice"
        ],
        "stock": 20,
        "sale": 0
    },
    {
        "id": 2,
        "category": "Main Dish",
        "foodName": "Food Tart",
        "price": 22800,
        "imagePath": " https://s3-alpha-sig.figma.com/img/8de6/08f4/fc3d415a9e59a1a8de7a0d9189e0fa8d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hi-Sz3PNJmvmFUnDLv6-pd5XAjtHvHGIbF5oCn~kHeF9rtLqvz38T42QSXrkuS-QW45u7WntjezZxUzNJ318o9tDGNJ1tf~fGjw8JQbH0CAh6RYHnoOnoFv8kXz4qlBE0qsYTJvxXUqo7mVWEcez~Xa7119AGxAXu4hF-~m9L~mF9VDIOioZXE7In2zPSPbmB~8Hcmlv-zHMy9d-1lsm0W68~-lnAr265zaSJPztllmDrc2qyXU9pVwoFeB7-T8h4im1Rp7I2Vy1O05ZoiiHe~eUwCGVzqV3~qPViekGmqVVpj2fzBbBw72Z7KM0KM56Wru6hS9NNbIkTnTzbC6RKQ__",
        "ingredients": [
            "Pastry",
            "Filling of choice"
        ],
        "stock": 15,
        "sale": 10
    },
    {
        "id": 3,
        "category": "Main Dish",
        "foodName": "Breakfast",
        "price": 14800,
        "imagePath": " https://s3-alpha-sig.figma.com/img/27cb/2c3b/60df84dc4dd7d808ba224aff01eeb6d8?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=apwP4dbOfKnGEp54UuOvwW5np6OowqaXEGyyWfk8IcB3j0okIMkH4kHXrFVLjy1ABOISKi50P3nXX9fNJtYDdLb70Sc5qSNLDv3sZZEe8U7FLs9c7-liCTqrdVZY0Q5LkG-~IWs-3HQaixWqeokAxImOz-GAlyOzl6ldSYhGxNlKukj8HB12h~8JKBycM4~vHGJ54hwrWvcTCpzi8r7jwHdY0Q6fAk3aAo0l-UqCWNRSKGhn80qt5MRlfRrHb6E3OgTIigyWHy~o3vWrLfnJLXMDZe2~epXRUK7U9Ix1oosyqSnRQjW7qa9TCxgzrAfF8ecskBfcb7WQyrb4K8rRgw__",
        "ingredients": [
            "Eggs",
            "Bread",
            "Butter",
            "Jam"
        ],
        "stock": 30,
        "sale": 0
    },
    {
        "id": 4,
        "category": "Main Dish",
        "foodName": "Soup",
        "price": 17800,
        "imagePath": " https://s3-alpha-sig.figma.com/img/212a/1c96/f7a2a9e4728cdfcd39a141afa4d32e5c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qyHFce1AZJ6q~271ytar3EnyEtKoXnsibVqocO56rbKRTrntpIzIUrJX2yoOzyyxApofQxAJKuNl1T7hHFUvgzePRbfrgDzMm~RB8kvN4-ngfADYXpOjwxIOkNnIlr3jhfiude6RP-pG~nNbKv8rDvUrY7CouEQhGDk90UetFfr9eBxPNOf1vXvfsqdkhb2u-v9Ss36RxV~w~iro5aWk0zagYL~GekOUWq-Qm1pQM9AQ7x5~fGQRx3ArSfBTwPNcK0vM42gtl4Vym2tRxkMYvdjuSY0XkuF6Y9zi~lNx5BUkFj-HxsH0Db9zdD1Jo4dPpU-44Tww~vLt0VkXN-Bk5w__",
        "ingredients": [
            "Broth",
            "Vegetables",
            "Herbs",
            "Spices"
        ],
        "stock": 25,
        "sale": 15
    },
    {
        "id": 5,
        "category": "Main Dish",
        "foodName": "Steak",
        "price": 46800,
        "imagePath": " https://t3.ftcdn.net/jpg/01/16/36/28/360_F_116362893_5lM48e4YkHmmgIeVCun0L0Esl0lsuN8p.jpg ",
        "ingredients": [
            "Beef",
            "Seasoning",
            "Butter",
            "Garlic"
        ],
        "stock": 15,
        "sale": 0
    },
    {
        "id": 6,
        "category": "Main Dish",
        "foodName": "Pasta Carbonara",
        "price": 25800,
        "imagePath": " https://as1.ftcdn.net/v2/jpg/03/34/69/44/1000_F_334694464_cJL8EyY39CKocJVrnp0Skk2V1LSdY9Q0.jpg ",
        "ingredients": [
            "Pasta",
            "Eggs",
            "Parmesan Cheese",
            "Pancetta"
        ],
        "stock": 20,
        "sale": 0
    },
    {
        "id": 7,
        "category": "Main Dish",
        "foodName": "Stir-Fry",
        "price": 19800,
        "imagePath": " https://www.shutterstock.com/image-photo/asian-cuisine-stir-fried-chicken-600nw-2330854893.jpg ",
        "ingredients": [
            "Vegetables",
            "Protein of choice",
            "Sauce",
            "Oil"
        ],
        "stock": 25,
        "sale": 10
    },
    {
        "id": 8,
        "category": "Main Dish",
        "foodName": "Burger",
        "price": 26800,
        "imagePath": " https://www.shutterstock.com/shutterstock/photos/705104968/display_1500/stock-photo-fresh-tasty-burger-isolated-on-white-background-705104968.jpg ",
        "ingredients": [
            "Beef Patty",
            "Bun",
            "Lettuce",
            "Tomato",
            "Cheese"
        ],
        "stock": 20,
        "sale": 0
    },
    {
        "id": 9,
        "category": "Main Dish",
        "foodName": "Sushi Roll",
        "price": 34800,
        "imagePath": " https://img.freepik.com/premium-photo/mouthwatering-sushi-rolls-stock-photos-foodies_960396-203.jpg ",
        "ingredients": [
            "Sushi Rice",
            "Seafood or Vegetables",
            "Nori",
            "Soy Sauce"
        ],
        "stock": 20,
        "sale": 20
    },
    {
        "id": 10,
        "category": "Main Dish",
        "foodName": "Fish and Chips",
        "price": 29800,
        "imagePath": " https://t3.ftcdn.net/jpg/02/06/81/46/360_F_206814646_CmvG1Siwa7kZSHbse5jaFxLhU9IcO3kR.jpg ",
        "ingredients": [
            "Fish Fillet",
            "Potatoes",
            "Flour",
            "Beer Batter"
        ],
        "stock": 15,
        "sale": 0
    },
    {
        "id": 11,
        "category": "Salads",
        "foodName": "Sweet Chicken",
        "price": 24800,
        "imagePath": " https://media.istockphoto.com/id/579254020/photo/general-tsos-chicken-with-rice-for-dinner-horizontal-close-up.jpg?s=612x612&w=0&k=20&c=iF70D4_elplbDhtcyA9g4t27PUlJOnzyWceO-3G0tJY= ",
        "ingredients": [
            "Chicken",
            "Salad Greens",
            "Dressing"
        ],
        "stock": 20,
        "sale": 0
    },
    {
        "id": 12,
        "category": "Salads",
        "foodName": "Lunch Salad",
        "price": 24800,
        "imagePath": " https://media.istockphoto.com/id/1293479617/photo/woman-hands-eating-vegan-salad-of-baked-vegetables-avocado-tofu-and-buckwheat-buddha-bowl-top.jpg?s=612x612&w=0&k=20&c=jATx1jeDBsUgT2zIla6eh-i1OUPvIfgkb0-4QnAruAY= ",
        "ingredients": [
            "Salad Greens",
            "Tomatoes",
            "Cucumbers",
            "Dressing"
        ],
        "stock": 25,
        "sale": 10
    },
    {
        "id": 13,
        "category": "Salads",
        "foodName": "Sandwich",
        "price": 14800,
        "imagePath": " https://media.istockphoto.com/id/1397193477/photo/club-sandwich-made-with-bacon-ham-turkey-cheese-lettuce-and-tomato.jpg?s=612x612&w=0&k=20&c=fjNyxTEA0L88bqENs8_SKMnfAOyWlNPGxLIxz9nsSss= ",
        "ingredients": [
            "Bread",
            "Meat",
            "Cheese",
            "Vegetables"
        ],
        "stock": 30,
        "sale": 0
    },
    {
        "id": 14,
        "category": "Salads",
        "foodName": "Apple Pie",
        "price": 34800,
        "imagePath": " https://t3.ftcdn.net/jpg/01/72/24/72/360_F_172247221_18dyUOGfo3j1rkrcLqDwUOmK0d2X7wjy.jpg ",
        "ingredients": [
            "Pastry",
            "Apples",
            "Sugar",
            "Cinnamon"
        ],
        "stock": 20,
        "sale": 10
    },
    {
        "id": 15,
        "category": "Salads",
        "foodName": "Caesar Salad",
        "price": 19800,
        "imagePath": " https://media.istockphoto.com/id/534139231/photo/healthy-grilled-chicken-caesar-salad.jpg?s=612x612&w=0&k=20&c=TR_sE5S5ChmjFywg3dh_J5V_ha-BcwgTU26BvsgbsjY= ",
        "ingredients": [
            "Romaine Lettuce",
            "Croutons",
            "Parmesan Cheese",
            "Caesar Dressing"
        ],
        "stock": 25,
        "sale": 0
    },
    {
        "id": 16,
        "category": "Salads",
        "foodName": "Caprese Salad",
        "price": 24800,
        "imagePath": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2Farchive%2F3b432b41ce04c96a08d77befa42b9881a587a436",
        "ingredients": [
            "Tomatoes",
            "Fresh Mozzarella",
            "Basil",
            "Balsamic Glaze"
        ],
        "stock": 20,
        "sale": 15
    },
    {
        "id": 17,
        "category": "Salads",
        "foodName": "Bruschetta",
        "price": 16800,
        "imagePath": " https://images.themodernproper.com/billowy-turkey/production/posts/TomatoandAvocadoBruschetta_8.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1690997775&s=4a0e918814cf59dcaf0d506f016bd650",
        "ingredients": [
            "Baguette",
            "Tomatoes",
            "Garlic",
            "Basil",
            "Olive Oil"
        ],
        "stock": 30,
        "sale": 0
    },
    {
        "id": 18,
        "category": "Salads",
        "foodName": "Spring Rolls",
        "price": 19800,
        "imagePath": " https://redhousespice.com/wp-content/uploads/2021/12/whole-spring-rolls-and-halved-ones-scaled.jpg ",
        "ingredients": [
            "Rice Paper",
            "Shrimp",
            "Vegetables",
            "Dipping Sauce"
        ],
        "stock": 20,
        "sale": 0
    },
    {
        "id": 19,
        "category": "Salads",
        "foodName": "Mozzarella Sticks",
        "price": 17800,
        "imagePath": " https://www.momontimeout.com/wp-content/uploads/2021/10/air-fryer-mozzarella-stick-easy-recipe.jpeg ",
        "ingredients": [
            "Mozzarella Cheese",
            "Breadcrumbs",
            "Marinara Sauce"
        ],
        "stock": 25,
        "sale": 0
    },
    {
        "id": 20,
        "category": "Salads",
        "foodName": "Hummus Platter",
        "price": 21800,
        "imagePath": " https://peasandcrayons.com/wp-content/uploads/2016/04/healthy-mediterranean-bruschetta-hummus-platter-recipe-PEASandCRAYONS-2901.jpg ",
        "ingredients": [
            "Chickpeas",
            "Tahini",
            "Olive Oil",
            "Pita Bread",
            "Vegetable Sticks"
        ],
        "stock": 20,
        "sale": 10
    },
    {
        "id": 21,
        "category": "Breakfast",
        "foodName": "Pancakes",
        "price": 15800,
        "imagePath": " https://images.services.kitchenstories.io/8OjqS2ypvWStDdcOl882SLW1p9g=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R2726-photo-final-2.jpg ",
        "ingredients": [
            "Flour",
            "Eggs",
            "Milk",
            " Butter",
            "Syrup"
        ],
        "stock": 30,
        "sale": 0
    },
    {
        "id": 22,
        "category": "Breakfast",
        "foodName": "Omelette",
        "price": 16800,
        "imagePath": " https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg ",
        "ingredients": [
            "Eggs",
            "Cheese",
            "Vegetables",
            "Herbs"
        ],
        "stock": 25,
        "sale": 0
    },
    {
        "id": 23,
        "category": "Breakfast",
        "foodName": "French Toast",
        "price": 13800,
        "imagePath": " https://joyfoodsunshine.com/wp-content/uploads/2018/05/best-easy-french-toast-recipe-4.jpg ",
        "ingredients": [
            "Bread",
            "Eggs",
            "Milk",
            "Vanilla",
            "Cinnamon"
        ],
        "stock": 30,
        "sale": 20
    },
    {
        "id": 24,
        "category": "Breakfast",
        "foodName": "Smoothie Bowl",
        "price": 19800,
        "imagePath": " https://www.wellplated.com/wp-content/uploads/2022/12/Smoothie-Bowl-For-Dinner-Healthy.jpg ",
        "ingredients": [
            "Smoothie Base",
            "Fruits",
            "Granola",
            "Nuts",
            "Seeds"
        ],
        "stock": 20,
        "sale": 0
    },
    {
        "id": 25,
        "category": "Breakfast",
        "foodName": "Eggs Benedict",
        "price": 22800,
        "imagePath": " https://natashaskitchen.com/wp-content/uploads/2022/04/Egg-Benedict-SQ.jpg ",
        "ingredients": [
            "English Muffin",
            "Poached Eggs",
            "Canadian Bacon",
            "Hollandaise Sauce"
        ],
        "stock": 25,
        "sale": 0
    },
    {
        "id": 26,
        "category": "Breakfast",
        "foodName": "Avocado Toast",
        "price": 19800,
        "imagePath": " https://cdn.loveandlemons.com/wp-content/uploads/2020/01/avocado-toast.jpg ",
        "ingredients": [
            "Bread",
            "Avocado",
            "Tomatoes",
            "Feta Cheese",
            "Lemon"
        ],
        "stock": 20,
        "sale": 10
    },
    {
        "id": 27,
        "category": "Breakfast",
        "foodName": "Bagel with Lox",
        "price": 24800,
        "imagePath": " https://st.depositphotos.com/1757359/4886/i/450/depositphotos_48864579-stock-photo-smoked-salmon-bagel.jpg ",
        "ingredients": [
            "Bagel",
            "Smoked Salmon",
            "Cream Cheese",
            "Red Onion",
            "Capers"
        ],
        "stock": 20,
        "sale": 0
    },
    {
        "id": 28,
        "category": "Breakfast",
        "foodName": "Belgian Waffles",
        "price": 17800,
        "imagePath": " https://media.istockphoto.com/id/185266029/photo/waffles-with-fruit-and-maple-syrup-on-a-marble-counter.jpg?s=612x612&w=0&k=20&c=YkBBzuSLisdHiECgS_NHN6gOyOMN6exADFk-RIlfKtI= ",
        "ingredients": [
            "Waffle Batter",
            "Maple Syrup",
            "Whipped Cream",
            "Berries"
        ],
        "stock": 25,
        "sale": 0
    },
    {
        "id": 29,
        "category": "Breakfast",
        "foodName": "Greek Yogurt Parfait",
        "price": 19800,
        "imagePath": " https://media.istockphoto.com/id/1142071499/photo/greek-yogurt-parfait.jpg?s=1024x1024&w=is&k=20&c=XVmbR2mWi8jA5Y8ybnvvvMBRnvMnx3AoNDM_L_H4XhQ= ",
        "ingredients": [
            "Greek Yogurt",
            "Granola",
            "Honey",
            "Berries"
        ],
        "stock": 20,
        "sale": 20
    },
    {
        "id": 30,
        "category": "Breakfast",
        "foodName": "Breakfast Burrito",
        "price": 21800,
        "imagePath": " https://www.shutterstock.com/image-illustration/best-fillings-breakfast-burrito-600nw-2348236997.jpg ",
        "ingredients": [
            "Tortilla",
            "Scrambled Eggs",
            "Sausage",
            "Cheese",
            "Salsa"
        ],
        "stock": 25,
        "sale": 0
    },
    {
        "id": 31,
        "category": "Dessert",
        "foodName": "Chocolate Cake",
        "price": 29800,
        "imagePath": " https://foodess.com/wp-content/uploads/2018/02/moist-chocolate-cake.jpg ",
        "ingredients": [
            "Flour",
            "Sugar",
            "Cocoa Powder",
            "Eggs",
            "Butter"
        ],
        "stock": 20,
        "sale": 0
    },
    {
        "id": 32,
        "category": "Dessert",
        "foodName": "Ice Cream Sundae",
        "price": 24800,
        "imagePath": " https://www.thespruceeats.com/thmb/3QatTcsVjKeDVCD-rIeUa4fSRAs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-banana-split-recipe-305712-hero-01-ef0482a539394da0b5ba64ade0c73b98.jpg ",
        "ingredients": [
            "Ice Cream",
            "Chocolate Sauce",
            "Whipped Cream",
            "Nuts",
            "Cherries"
        ],
        "stock": 25,
        "sale": 0
    },
    {
        "id": 33,
        "category": "Dessert",
        "foodName": "Fruit Tart",
        "price": 26800,
        "imagePath": " https://www.modernhoney.com/wp-content/uploads/2017/04/Fruit-Tart-Recipe-8.jpg ",
        "ingredients": [
            "Pastry",
            "Pastry Cream",
            "Assorted Fruits"
        ],
        "stock": 20,
        "sale": 0
    },
    {
        "id": 34,
        "category": "Dessert",
        "foodName": "Cheesecake",
        "price": 32800,
        "imagePath": " https://mojo.generalmills.com/api/public/content/eofRrV5AR5CDiPDZdMyAGw_gmi_hi_res_jpeg.jpeg?v=dc8e8270&t=466b54bb264e48b199fc8e83ef1136b4",
        "ingredients": [
            "Graham Cracker Crust",
            "Cream Cheese",
            "Sugar",
            "Eggs",
            "Vanilla"
        ],
        "stock": 20,
        "sale": 20
    },
    {
        "id": 35,
        "category": "Dessert",
        "foodName": "Tiramisu",
        "price": 28800,
        "imagePath": " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzRDyezBe4W6DOr3PJwBGlxkGL3tFRWMJCA&usqp=CAU ",
        "ingredients": [
            "Ladyfingers",
            "Mascarpone Cheese",
            "Coffee",
            "Cocoa Powder"
        ],
        "stock": 20,
        "sale": 0
    },
    {
        "id": 36,
        "category": "Dessert",
        "foodName": "Banoffee Pie",
        "price": 30800,
        "imagePath": " https://www.allrecipes.com/thmb/cuPG3ES6WAkBt-gSARQY2V_osD0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/12625-Banoffee-pie-ddmfs-1x2-1771-9728e8a56ffa4672853fcc1a3f9f930e.jpg ",
        "ingredients": [
            "Biscuit Base",
            "Bananas",
            "Toffee Sauce",
            "Whipped Cream"
        ],
        "stock": 15,
        "sale": 0
    },
    {
        "id": 37,
        "category": "Dessert",
        "foodName": "Key Lime Pie",
        "price": 27800,
        "imagePath": "https://www.allrecipes.com/thmb/1aP8lFhJJXky1qjk5fbMTzVAjtU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/12698-Easy-Key-Lime-Pie-ddmfs-103444-4x3-1-eb1a59500e384b2b8939094ce18d08be.jpg ",
        "ingredients": [
            "Graham Cracker Crust",
            "Key Lime Juice",
            "Condensed Milk"
        ],
        "stock": 20,
        "sale": 0
    },
    {
        "id": 38,
        "category": "Dessert",
        "foodName": "Red Velvet Cake",
        "price": 29800,
        "imagePath": " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzbGfsfJU_i0B7sS_SJG8UgKnbSwQ-o3CMJg&usqp=CAU ",
        "ingredients": [
            "Flour",
            "Buttermilk",
            "Cocoa Powder",
            "Red Food Coloring"
        ],
        "stock": 20,
        "sale": 20
    },
    {
        "id": 39,
        "category": "Dessert",
        "foodName": "Creme Brulee",
        "price": 31800,
        "imagePath": " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsChm7qfWeljfduyHRevW-ISQNLQo3nsYamg&usqp=CAU ",
        "ingredients": [
            "Cream",
            "Egg Yolks",
            "Sugar",
            "Vanilla Bean"
        ],
        "stock": 20,
        "sale": 0
    },
    {
        "id": 40,
        "category": "Dessert",
        "foodName": "Chocolate Mousse",
        "price": 27800,
        "imagePath": "https://img.taste.com.au/-13geMpY/w720-h480-cfill-q80/taste/2010/01/chocolate_mousse_in_minutes_1980x1320-117905-1.jpg ",
        "ingredients": [
            "Chocolate",
            "Cream",
            "Eggs",
            "Sugar"
        ],
        "stock": 25,
        "sale": 0
    }
]