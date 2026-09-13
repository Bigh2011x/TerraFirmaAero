// kubejsstudio recipes; re-apply merges by recipe id
ServerEvents.generateData('after_mods', event => {
    event.json('modern_industrialization:recipe/materials/steel/craft/ingot_from_nugget', {"type":"minecraft:crafting_shaped","category":"misc","pattern":["###","###","###"],"key":{"#":{"tag":"c:nuggets/steel"}},"result":{"id":"modern_industrialization:steel_ingot","count":1}})
})
