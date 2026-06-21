// priority: 1

ServerEvents.recipes((event) => {
    const withChance = (item, chance, count) => CreateItem.of(count == undefined ? item : `${count}x ${item}`, chance);

    // Sandpaper = grindstone recipes
    event.custom({
      type: 'create:sandpaper_polishing',
      ingredients: [
        {
          item: 'minecraft:rotten_flesh'
        }
      ],
      results: [
        {
          id: 'minecraft:leather'
        }
      ]
    })

    // Mixing
    event.recipes.createMixing('createmechanisms:rubber', ['minecraft:kelp', 'minecraft:kelp', 'minecraft:kelp', 'minecraft:kelp', Fluid.of('minecraft:water', 250)])
    event.recipes.createMixing('2x minecraft:dirt', ['minecraft:mud', 'minecraft:gravel', 'minecraft:clay_ball'])
    event.recipes.createMixing('minecraft:warped_nylium', ['minecraft:netherrack', 'minecraft:warped_fungus'])
    event.recipes.createMixing('minecraft:crimson_nylium', ['minecraft:netherrack', 'minecraft:crimson_fungus'])
    event.recipes.createMixing('9x minecraft:gunpowder', ['minecraft:wither_rose', 'biomeswevegone:blue_glowcane_powder', 'biomeswevegone:red_glowcane_powder', 'biomeswevegone:green_glowcane_powder', 'biomeswevegone:yellow_glowcane_powder']).superheated()
    event.recipes.createMixing('minecraft:lapis_lazuli', ['minecraft:glowstone_dust', 'minecraft:blue_dye', 'minecraft:amethyst_shard', Fluid.of('create_enchantment_industry:experience', 100)]).superheated()
    event.recipes.createMixing('minecraft:ender_pearl', [Fluid.of('createaddition:bioethanol', 250), 'createaddition:biomass_pellet', 'createaddition:biomass_pellet', 'createaddition:biomass_pellet', 'minecraft:prismarine_shard', 'minecraft:prismarine_shard', 'minecraft:prismarine_shard', 'minecraft:prismarine_crystals']).superheated()
    //event.recipes.create.mixing('3x createmechanisms:bronze', ['minecraft:copper_ingot', 'minecraft:copper_ingot', 'minecraft:copper_ingot', 'minecraft:iron_ingot']).heated()
    event.recipes.createMixing('kubejs:chromatic_compound', [
      Ingredient.of('#c:dusts/glowstone'),
      Ingredient.of('#c:dusts/glowstone'), 
      Ingredient.of('#c:dusts/glowstone'),
      ('3x create:cinder_flour'),
      ('2x create:powdered_obsidian'),
      'create:polished_rose_quartz']
    ).superheated()
    event.recipes.createMixing('createaddition:electrum_ingot', ['minecraft:gold_ingot', Ingredient.of('#c:dusts/glowstone'), Ingredient.of('#c:gems/quartz')]).heated()

    // Deploy
    event.recipes.createDeploying('minecraft:shroomlight', ['minecraft:glowstone', Ingredient.of('#c:mushrooms')])
    event.recipes.createDeploying('minecraft:glow_ink_sac', ['minecraft:ink_sac', 'minecraft:glow_berries'])

    // Compacting
    event.recipes.createCompacting('minecraft:ink_sac', ['minecraft:dried_kelp', 'minecraft:black_dye'])
    event.recipes.createCompacting('minecraft:moss_block', ['minecraft:cobblestone', 'minecraft:cobblestone', 'minecraft:cobblestone', 'minecraft:vine'])
    event.recipes.createCompacting('minecraft:coal', ['minecraft:charcoal', 'minecraft:charcoal', 'minecraft:charcoal', 'minecraft:charcoal', Fluid.of('minecraft:lava', 250)])
    event.recipes.createCompacting(withChance('minecraft:amethyst_shard', 0.25), ['minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:quartz', Fluid.of('minecraft:lava', 250)]).superheated()
    event.recipes.createCompacting('minecraft:shulker_shell', ['create:sturdy_sheet', 'minecraft:popped_chorus_fruit', 'minecraft:popped_chorus_fruit', 'minecraft:popped_chorus_fruit', 'minecraft:popped_chorus_fruit'])
    event.recipes.createCompacting('minecraft:tuff', ['minecraft:andesite', 'minecraft:cobblestone', Fluid.of('minecraft:lava', 250)])

    // Crushing
    event.recipes.createCrushing([
       withChance(' minecraft:glowstone_dust', 0.25),
       withChance(' minecraft:glowstone_dust', 0.10)
    ], 'minecraft:soul_sand').processingTime(100)
    event.recipes.createCrushing([
      'irons_spellbooks:common_ink',
      withChance('irons_spellbooks:uncommon_ink', 0.5)
    ], 'irons_spellbooks:scroll').processingTime(100)

    event.recipes.createCrushing([
        withChance(" garnished:crushed_salt", 1),
        withChance(" create_aquatic_ambitions:calcium_rich_powder", 1),
        withChance(" create_aquatic_ambitions:calcium_rich_powder", 0.5),
        withChance(" create_aquatic_ambitions:suspicious_rock", 0.05),
      ],
      "create:limestone",
    )
    .processingTime(100);

/*     event.custom({
      type: 'create:crushing',
      ingredients: [
        {
          item: 'minecraft:magma_block'
        }
      ],
      processing_time: 100,
      results: [
        {
          id: 'create_things_and_misc:crushed_magma',
          count: 4
        },
        {
          id: 'create_things_and_misc:crushed_magma',
          chance: 0.2,
          count: 2
        }
      ]
    })
 */
    // Mill
    event.recipes.createMilling( 'garnished:small_chorus_plant','minecraft:chorus_fruit')

    // Filling
    event.recipes.createFilling('minecraft:magma_block', ['minecraft:netherrack', Fluid.of('minecraft:lava', 250)])
    event.recipes.createFilling('create:rose_quartz', [Ingredient.of('#c:gems/quartz'), Fluid.of('kubejs:fluid_redstone', 400)])

    // Haunting
    event.recipes.createHaunting(['minecraft:wither_rose'], 'minecraft:poppy')
    event.recipes.createHaunting(['minecraft:magma_cream'], 'minecraft:slime_ball')

    event.recipes.createCutting(['minecraft:snowball', 'minecraft:snowball', 'minecraft:snowball', 'minecraft:snowball'], 'minecraft:snow_block').id('endsnowball')
    event.recipes.createCutting('garnished:small_chorus_plant', 'minecraft:chorus_fruit')

    //event.recipes.create.mixing('7x ' + IS('arcane_essence'), ['2x ' + MC('lapis_lazuli'), '2x ' + MC('blaze_powder'), CR('experience_nugget')]).superheated()

    let transitional = 'createmechanisms:incomplete_wooden_mechanism'
    event.recipes.createSequencedAssembly([
      'createmechanisms:wooden_mechanism',
    ], Ingredient.of('#c:stripped_woods'), [
          event.recipes.createDeploying(transitional, [transitional, Ingredient.of('#createmechanisms:sawing_tools')]),
          event.recipes.createDeploying(transitional, [transitional, 'garnished:boarded_pulp']),
          event.recipes.createDeploying(transitional, [transitional, 'create:andesite_alloy']),
          event.recipes.createDeploying(transitional, [transitional, 'create:cogwheel']),
          event.recipes.createDeploying(transitional, [transitional, 'create:large_cogwheel']),
          event.recipes.create.pressing(transitional, transitional)
    ]).transitionalItem(transitional)
      .loops(1)
      .id('end:wooden_mechanism')

    transitional = 'kubejs:incomplete_blackstone'
    event.recipes.createSequencedAssembly([
      'minecraft:gilded_blackstone',
    ], 'minecraft:blackstone', [
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:gold_ingot']),
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:gold_ingot']),
    ]).transitionalItem(transitional)
      .loops(1)
      .id('end:black')

    transitional = 'createmechanisms:incomplete_rubber_mechanism'
    event.recipes.createSequencedAssembly([
      'createmechanisms:rubber_mechanism',
    ], 'createmechanisms:wooden_mechanism', [
          event.recipes.createDeploying(transitional, [transitional, 'createmechanisms:cured_rubber']),
          event.recipes.createDeploying(transitional, [transitional, 'createmechanisms:cured_rubber']),
          event.recipes.createDeploying(transitional, [transitional, 'garnished:hardened_wrap']),
          event.recipes.createDeploying(transitional, [transitional, 'create:copper_sheet']),
          event.recipes.create.pressing(transitional, transitional),
    ]).transitionalItem(transitional)
      .loops(1)
      .id('end:rubber_mechanism')

    transitional = 'createmechanisms:incomplete_heat_mechanism'
    event.recipes.createSequencedAssembly([
      'createmechanisms:heat_mechanism',
    ], 'createmechanisms:rubber_mechanism', [
          event.recipes.createDeploying(transitional, [transitional, 'create_new_age:overcharged_iron_sheet']),
          event.recipes.createDeploying(transitional, [transitional, Ingredient.of('#c:ingots/bronze')]),
          event.recipes.createDeploying(transitional, [transitional, 'garnished:baklava']),
          event.recipes.createDeploying(transitional, [transitional, 'create_things_and_misc:crushed_magma']),
          event.recipes.createFilling(transitional, [transitional, Fluid.of('create_bic_bit:frying_oil', 250)]),
          event.recipes.createPressing(transitional, transitional),
    ]).transitionalItem(transitional)
      .loops(2)
      .id('end:heat_mechanism')

    transitional = 'createmechanisms:incomplete_ender_mechanism'
    event.recipes.createSequencedAssembly([
      'createmechanisms:ender_mechanism',
    ], 'biomeswevegone:mossy_stone_slab', [
          event.recipes.createDeploying(transitional, [transitional, 'eternal_starlight:lunaris_cactus_gel']),
          event.recipes.createDeploying(transitional, [transitional, 'garnished:wrapped_warped_tangle']),
          event.recipes.createDeploying(transitional, [transitional, 'garnished:ethereal_compound']),
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:ender_eye']),
          event.recipes.createPressing(transitional, transitional),
          event.recipes.createFilling(transitional, [transitional, Fluid.of('createmechanisms:enderiam', 350)]),
    ]).transitionalItem(transitional)
      .loops(2)
      .id('end:ender_mechanism')

    transitional = 'createmechanisms:incomplete_advanced_precision_mechanism'
    event.recipes.createSequencedAssembly([
      'createmechanisms:advanced_precision_mechanism',
    ], 'kubejs:chromatic_compound', [
          event.recipes.createDeploying(transitional, [transitional, 'createmechanisms:ender_mechanism']),
          event.recipes.createDeploying(transitional, [transitional, 'createmechanisms:heat_mechanism']),
          event.recipes.createDeploying(transitional, [transitional, 'create_things_and_misc:vibration_mechanism']),
          event.recipes.createDeploying(transitional, [transitional, 'createteleporters:quantum_mechanism']),
          event.recipes.createDeploying(transitional, [transitional, 'create:precision_mechanism']),
          event.recipes.createPressing(transitional, transitional),
    ]).transitionalItem(transitional)
      .loops(3)
      .id('end:precision_mechanism')

    // Farmers Delight
    event.recipes.createMixing('farmersdelight:apple_pie', ['minecraft:wheat', 'minecraft:wheat', 'minecraft:apple', 'minecraft:apple', 'minecraft:apple', 'minecraft:sugar', 'minecraft:sugar', 'farmersdelight:pie_crust'])
    event.recipes.createMixing('farmersdelight:sweet_berry_cheesecake', ['minecraft:sweet_berries', 'minecraft:sweet_berries', 'minecraft:sweet_berries', 'minecraft:sweet_berries', 'minecraft:sweet_berries', 'minecraft:sweet_berries', Fluid.of('minecraft:milk', 1000), 'farmersdelight:pie_crust'])
    event.recipes.createMixing('farmersdelight:fruit_salad', ['minecraft:apple', 'minecraft:melon_slice', 'minecraft:melon_slice', Ingredient.of('#c:foods/berry'), Ingredient.of('#c:foods/berry'), 'farmersdelight:pumpkin_slice', 'minecraft:bowl'])
    event.recipes.createMixing('farmersdelight:mixed_salad', [Ingredient.of('#c:foods/cabbage'), 'farmersdelight:tomato', 'minecraft:beetroot', 'minecraft:bowl'])
    event.recipes.createMixing('farmersdelight:nether_salad', ['minecraft:crimson_fungus', 'minecraft:warped_fungus', 'minecraft:bowl'])

    transitional = 'kubejs:incomplete_melon_popsicle'
    event.recipes.createSequencedAssembly([
      'farmersdelight:melon_popsicle',
    ], 'minecraft:stick', [
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:ice']),
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:melon_slice']),
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:melon_slice']),
    ]).transitionalItem(transitional)
      .loops(2)
      .id('end:melon_popsicle')

    transitional = 'kubejs:incomplete_barbecue_stick'
    event.recipes.createSequencedAssembly([
      'farmersdelight:barbecue_stick'
    ], 'minecraft:stick', [
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:onion']),
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:tomato']),
          event.recipes.createDeploying(transitional, [transitional, Ingredient.of('#c:foods/cooked_meat')]),
    ]).transitionalItem(transitional)
      .loops(1)
      .id('end:barbecue_stick')

    transitional = 'kubejs:incomplete_mutton_wrap'
    event.recipes.createSequencedAssembly([
      'farmersdelight:mutton_wrap'
    ], Ingredient.of('#c:foods/bread'), [
          event.recipes.createDeploying(transitional, [transitional, Ingredient.of('#c:foods/cooked_mutton')]),
          event.recipes.createDeploying(transitional, [transitional, Ingredient.of('#c:foods/cabbage')]),
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:onion']),
    ]).transitionalItem(transitional)
      .loops(1)
      .id('end:mutton_wrap')

    transitional = 'kubejs:incomplete_stuffed_potato'
    event.recipes.createSequencedAssembly([
      'farmersdelight:stuffed_potato'
    ], 'minecraft:baked_potato', [
          event.recipes.createDeploying(transitional, [transitional, Ingredient.of('#c:foods/cooked_beef')]),
          event.recipes.createFilling(transitional, [transitional, Fluid.of('minecraft:milk', 750)]),
    ]).transitionalItem(transitional)
      .loops(1)
      .id('end:stuffed_potato')

    transitional = 'kubejs:incomplete_salmon_roll'
    event.recipes.createSequencedAssembly([
      'farmersdelight:salmon_roll'
    ], 'farmersdelight:cooked_rice', [
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:salmon_slice']),
    ]).transitionalItem(transitional)
      .loops(2)
      .id('end:salmon_roll')

    transitional = 'kubejs:incomplete_cod_roll'
    event.recipes.createSequencedAssembly([
      'farmersdelight:cod_roll'
    ], 'farmersdelight:cooked_rice', [
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:cod_slice']),
    ]).transitionalItem(transitional)
      .loops(2)
      .id('end:cod_roll')

    transitional = 'kubejs:incomplete_kelp_roll'
    event.recipes.createSequencedAssembly([
      'farmersdelight:kelp_roll'
    ], 'minecraft:dried_kelp', [
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:dried_kelp']),
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:cooked_rice']),
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:carrot']),
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:cooked_rice']),
    ]).transitionalItem(transitional)
      .loops(1)
      .id('end:kelp_roll')

    transitional = 'kubejs:incomplete_rice_roll_medley_block'
    event.recipes.createSequencedAssembly([
      'farmersdelight:rice_roll_medley_block'
    ], 'minecraft:bowl', [
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:cod_roll']),
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:kelp_roll_slice']),
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:salmon_roll']),
    ]).transitionalItem(transitional)
      .loops(2)
      .id('end:rice_roll_medley_block')

    transitional = 'kubejs:incomplete_shepherds_pie_block'
    event.recipes.createSequencedAssembly([
      'farmersdelight:shepherds_pie_block'
    ], 'minecraft:bowl', [
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:baked_potato']),
          event.recipes.createDeploying(transitional, [transitional, Ingredient.of('#c:foods/cooked_mutton')]),
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:onion']),
          event.recipes.createFilling(transitional, [transitional, Fluid.of('minecraft:milk', 400)]),
    ]).transitionalItem(transitional)
      .loops(2)
      .id('end:shepherds_pie_block')

    transitional = 'kubejs:incomplete_roast_chicken_block'
    event.recipes.createSequencedAssembly([
      'farmersdelight:roast_chicken_block'
    ], 'minecraft:bowl', [
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:cooked_chicken']),
          event.recipes.createDeploying(transitional, [transitional, Ingredient.of('#c:eggs')]),
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:carrot']),
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:baked_potato']),
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:onion']),
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:bread']),
    ]).transitionalItem(transitional)
      .loops(1)
      .id('end:roast_chicken_block')

    transitional = 'kubejs:incomplete_grilled_salmon'
    event.recipes.createSequencedAssembly([
      'farmersdelight:grilled_salmon'
    ], 'minecraft:bowl', [
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:sweet_berries']),
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:onion']),
          event.recipes.createDeploying(transitional, [transitional, Ingredient.of('#c:foods/cabbage')]),
          event.recipes.createDeploying(transitional, [transitional, Ingredient.of('#c:foods/cooked_salmon')]),
    ]).transitionalItem(transitional)
      .loops(1)
      .id('end:grilled_salmon')

    transitional = 'kubejs:incomplete_steak_and_potatoes'
    event.recipes.createSequencedAssembly([
      'farmersdelight:steak_and_potatoes'
    ], 'minecraft:bowl', [
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:cooked_beef']),
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:baked_potato']),
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:onion']),
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:cooked_rice']),
    ]).transitionalItem(transitional)
      .loops(1)
      .id('end:steak_and_potatoes')

    transitional = 'kubejs:incomplete_roasted_mutton_chops'
    event.recipes.createSequencedAssembly([
      'farmersdelight:roasted_mutton_chops'
    ], 'minecraft:bowl', [
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:cooked_mutton_chops']),
          event.recipes.createDeploying(transitional, [transitional, 'minecraft:beetroot']),
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:tomato']),
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:cooked_rice']),
    ]).transitionalItem(transitional)
      .loops(1)
      .id('end:roasted_mutton_chops')

    transitional = 'kubejs:incomplete_bacon_and_eggs'
    event.recipes.createSequencedAssembly([
      'farmersdelight:bacon_and_eggs'
    ], 'minecraft:bowl', [
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:cooked_bacon']),
          event.recipes.createDeploying(transitional, [transitional, 'farmersdelight:fried_egg']),
    ]).transitionalItem(transitional)
      .loops(2)
      .id('end:bacon_and_eggs')

    // Recycle
    const equipmentRecyclingData = {
      diamond: {
        'minecraft:diamond_pickaxe': [0.30, 0.10],
        'minecraft:diamond_shovel': [0.20],
        'minecraft:diamond_axe': [0.30, 0.10],
        'minecraft:diamond_hoe': [0.20],
        'minecraft:diamond_sword': [0.30, 0.03],
        'minecraft:diamond_helmet': [1, 0.10, 0.05],
        'minecraft:diamond_chestplate': [1, 0.30, 0.10, 0.05],
        'minecraft:diamond_leggings': [1, 0.15, 0.05],
        'minecraft:diamond_boots': [1, 0.05],
        'simplyswords:diamond_longsword': [0.20],
        'simplyswords:diamond_twinblade': [0.20],
        'simplyswords:diamond_rapier': [0.20],
        'simplyswords:diamond_katana': [0.20],
        'simplyswords:diamond_sai': [0.20],
        'simplyswords:diamond_spear': [0.20],
        'simplyswords:diamond_glaive': [0.20],
        'simplyswords:diamond_warglaive': [0.20],
        'simplyswords:diamond_cutlass': [0.20],
        'simplyswords:diamond_claymore': [0.30],
        'simplyswords:diamond_greathammer': [0.30],
        'simplyswords:diamond_greataxe': [0.30],
        'simplyswords:diamond_chakram': [0.30],
        'simplyswords:diamond_scythe': [0.30],
        'simplyswords:diamond_halberd': [0.30]
      },
      iron: {
        'minecraft:iron_pickaxe': [0.60, 0.10],
        'minecraft:iron_shovel': [0.30],
        'minecraft:iron_axe': [0.60, 0.10],
        'minecraft:iron_hoe': [0.40],
        'minecraft:iron_sword': [0.60, 0.03],
        'minecraft:iron_helmet': [1, 0.10, 0.05],
        'minecraft:iron_chestplate': [1, 0.50, 0.10, 0.05],
        'minecraft:iron_leggings': [1, 0.30, 0.05],
        'minecraft:iron_boots': [1, 0.20],
        'simplyswords:iron_longsword': [0.60],
        'simplyswords:iron_twinblade': [0.60],
        'simplyswords:iron_rapier': [0.60],
        'simplyswords:iron_katana': [0.60],
        'simplyswords:iron_sai': [0.60],
        'simplyswords:iron_spear': [0.60],
        'simplyswords:iron_glaive': [0.60],
        'simplyswords:iron_warglaive': [0.50],
        'simplyswords:iron_cutlass': [0.50],
        'simplyswords:iron_claymore': [0.90],
        'simplyswords:iron_greathammer': [0.70],
        'simplyswords:iron_greataxe': [0.70],
        'simplyswords:iron_chakram': [0.70],
        'simplyswords:iron_scythe': [0.70],
        'simplyswords:iron_halberd': [0.70],
      },
      gold: {
        'minecraft:golden_pickaxe': [0.50, 0.05],
        'minecraft:golden_shovel': [0.50],
        'minecraft:golden_axe': [0.50, 0.05],
        'minecraft:golden_hoe': [0.40],
        'minecraft:golden_sword': [0.50, 0.02],
        'minecraft:golden_helmet': [0.80, 0.10, 0.05],
        'minecraft:golden_chestplate': [0.80, 0.40, 0.10, 0.05],
        'minecraft:golden_leggings': [0.80, 0.30, 0.05],
        'minecraft:golden_boots': [0.80, 0.20],
        'simplyswords:gold_longsword': [0.40],
        'simplyswords:gold_twinblade': [0.40],
        'simplyswords:gold_rapier': [0.40],
        'simplyswords:gold_katana': [0.40],
        'simplyswords:gold_sai': [0.40],
        'simplyswords:gold_spear': [0.40],
        'simplyswords:gold_glaive': [0.40],
        'simplyswords:gold_warglaive': [0.40],
        'simplyswords:gold_cutlass': [0.40],
        'simplyswords:gold_claymore': [0.60],
        'simplyswords:gold_greathammer': [0.60],
        'simplyswords:gold_greataxe': [0.50],
        'simplyswords:gold_chakram': [0.50],
        'simplyswords:gold_scythe': [0.50],
        'simplyswords:gold_halberd': [0.50]
      }
    };

    const recycleEquipment = (inputItem, outputItem, chances) => {
      let outputs = chances.map(chance => withChance(outputItem, chance));
      event.recipes.create.crushing(outputs, inputItem)
    }

    const processRecyclingData = (material, data) => {
      Object.entries(data).forEach(([item, chances]) => {
        recycleEquipment(item, material, chances);
      });
    };

    // Equipment recycling
    processRecyclingData('minecraft:diamond', equipmentRecyclingData.diamond);
    processRecyclingData('minecraft:iron_ingot', equipmentRecyclingData.iron);
    processRecyclingData('minecraft:gold_ingot', equipmentRecyclingData.gold);
});
