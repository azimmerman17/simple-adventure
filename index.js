window.alert('Welcome to your very own Adventure.  Please answer each prompt with an option in ALL CAPS.  Not doing so could spell disater!')
let firstAnswer = window.prompt('After a boring morning inside you decide to go on an adventure outside.  After exiting your home do you go to the MOUNTAIN, or to the FOREST?')

if(firstAnswer === 'Mountain') {
    let  secondAnswer = window.prompt('You jump in the car and have a rather uneventful drive. When you arrive at the mountain trailhead you notice you have 2 options.\nDo you take the OVERLOOK Trail or the LOOP Trail?')

} else if(firstAnswer === 'Forest') {
    secondAnswer = window.prompt('You get in your car a drive to a forest you\'ve wanted to go to for quite some time.  You arrive an start down the path.  After a few minutes you wonder what could be off the path.\nDo you STAY on the path or LEAVE the path?')
} else {
    window.alert('You jump in you car and start driving to your destination.  After 15 minutes you change your mind and decide you want to go home.  You turn around a go home realizing this is going to be the most boring day of your life.')
}

switch (secondAnswer) {
    case Overlook:
        thirdAnswer = window.prompt('It\'s a short but difficult hike to the overlook.  Halfway up you realize you\'re out of shape, but you make it and are rewarded with a 100 mile view.  After resting for about 20 minutes you decide it is time to head home./nDo you FOLLOW the trail back or BLAZE your own trail?')
    case Loop:
        thirdAnswer = window.prompt('You follow the loop it goes up and follows a ridge line for a mile or two.  You come across a field of Boulders.  You sit on a boulder on the edge of the field.\nDo you CONTINUE on the trail or EXPLORE the boulder field?')
    case Stay:
        thirdAnswer = window.prompt('You stay on the path.  It bends, it weaves, it goes up and down.  Eventually you come accross a "Great" tree.  After resting at its base, you realize it is climbable.\nDo you CLIMB the tree or CONTINUE along the path?')
    case Leave:
        thirdAnswer = window.prompt('Despite the sign stating "Leave the path at your own peril" you leave the path.  After a short time you realize you are completely lost.  You see a cave and you see a light flickering inside.\nDo you ENTER the cave or try to FIND the path?')
    default:
        window.alert('You find the decision too hard, so you head back to your car.  Upon arrival, you contemplate why you seem to be so indecisive.  After a while you realize you cannot decide on a reason and you go home.')
}

// switch (thirdAnswer) {
//     case Follow:
//         forthAnswer = window.prompt('The way back seems easier than the way up.  You')
// }

window.alert('To be Expanded...')
// console.log('After a boring morning inside you decide to go on an adventure outside.)