const stores = [
	{
		title: 'PICK ME UP',
        id: 'pickmeup',
        image: 'pickmeup.jpg',
        location: '76 W 2nd S, Rexburg, ID 83440',
        website: 'https://www.pickmeupdrinks.com/',
        hours: 'M-F 7:30AM-10PM, Sa 9AM-10AM, Su CLOSED',
        description: 'The team at Star Review is comprised of BYUI collage students who built Star Review as a way to share student reviews on popular places in Rexburg.',

        reviews: [
            {stars: 4, text: "This place is really great! They have some really good drinks. I'd recommend getting the My Little Pony. It's a sweet drink that taste like fruit. The hot chocolate is also pretty good. I definitely recommend this place just because they are able to make some mixed drinks. The only suggestion I have is maybe make those drinks a little more available so that way any new people coming in will know what to go for."},
            {stars: 5, text: "When I get Pick Me Up, I always order a custom drink and they make it perfect every time. They’re always super friendly, and that’s not exclusive to the Rexburg locations. Each one I go to has been great."}
        ]
	},
    {
		title: 'JAMBA JUICE',
        id: "jambajuice",
        image: 'jambajuice.jpg',
        location: '138 W. Main Street, Rexburg, ID 83440',
        website: 'https://www.jamba.com',
        hours: 'M-Sa 7AM-9PM, Su CLOSED',
        description: 'Jamba Juice is an American quick-service restaurant and juice bar chain that sells blended fruit and vegetable juices, smoothies and other food products.',

        reviews: [
            {stars: 5, text: "Great selection of drinks! You can customize each menu items by adding on vitamins or protein boosts, frozen fruits and vegetables, or change to different base like yogurt or sherbet. Kind and friendly servers. Provides limited indoors and outdoors (depends on season I think) seatings. Great atmosphere to chat and chill with friends."},
            {stars: 4, text: "A neighborhood favorite; Jamba Juice. Service has always been friendly. I'm unsure when they started asking for tips at the drive through window, but they did start doing that. They implemented paper straws for a short period of time only, so I hope to see more recycled materials, sustainable cup/container options in the future!"},
            {stars: 4, text: "Ate here for breakfast. Oatmeal was tasty. I'm always a fan of their smoothies. Non-smoothie options are quite expensive though."}
        ]
	},
    {
		title: 'TROPICAL SMOOTHIE CAFE',
        id: 'tropicalsmoothie',
        image: 'tropicalsmoothie.jpg',
        location: '113 South 2nd West, Rexburg, ID 83440',
        website: 'https://www.tropicalsmoothiecafe.com',
        hours: 'M-F 7AM-10PM, Sa 8AM-10PM, Su 10AM-8PM',
        description: 'Fresh, made to order smoothies, smoothie bowls, and more, packed with responsibly sourced, quality ingredients and good vibes.',

        reviews: [
            {stars: 4, text: "Not a bad experience coming here finally after seeing it every time going to Porter Park. The smoothies and food tasted good. I'll just say I'm glad they lower the price of the smoothie when you add a food purchase because the amount of food, at least mine and my roommate's was pretty low for the price."},
            {stars: 4, text: "Pricing was high in my opinion but we had some coupons to help cut the cost. Great selection of smoothies and other food items. We ordered 3 flavors and the hit was lil’ limeberry."},
            {stars: 5, text: "This place is freaking amazing! Even though it's a smoothie place, their food is also amazing. My friends and I love their vibe, and all of the staff is really friendly. They also get their food and smoothies out pretty quickly."}
        ]
	},
    {
        title: 'Dutch Bros Coffee',
        id: 'dutchbros',
        image: 'dutchbros.jpg',
        location: '905 W Main St, Rexburg, ID 83440',
        website: 'https://www.dutchbros.com',
        hours: 'M-Su 5AM-10PM',
        description: "Dutch Bros Coffee is a drive-through coffee chain headquartered in Grantd Pass, Oregon, with company-owned and franchise locations throughout the United States.",

        reviews: [
            {stars: 5, text: "The employees are always so nice and friendly. The manager is absolutely amazing and went out of his way to make my day better. Really great management and very impressed with how well they are operating after recently opening."},
            {stars: 2, text: "Usually really enjoy dutch! however recently they’re just putting more and more ice in the cups so less drink. today we went and the ice was literally from the bottom of the cup to the top!!!"},
            {stars: 1, text: "I didn’t know it was possible to be this slow. The service was extremely painful to endure. The line busters need to be more conscious of what line to go to next. They just skipped almost every car in one line because they kept going down the other."},
        ]
    }

]

export default stores