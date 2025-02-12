player.onChat("casa2", function () {
    player.teleport(world(780, 4, 1465))
    player.say("Es mi segunda casa.")
})
player.onChat("casa1", function () {
    player.teleport(world(802, 4, 1548))
    player.say("Es mi primer casa.")
})
player.onChat("casa3", function () {
    player.teleport(world(685, 4, 1376))
    player.say("Es mi tercer casa.")
})
player.say("Hola amigo. Déjame mostrarte mis 3 casas...")
player.say("Para ir allá escribe alguno de los comandos: casa1 casa2 o casa3")
