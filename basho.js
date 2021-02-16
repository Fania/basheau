const basho = [
  "Now cat's done/mewing, bedroom's/touched by moonlight.",
  "In my new robe/this morning -/someone else.",
  "Fields, mountains/of Hubaku, in/nine days - spring.",
  "Year by year,/the monkey's mask/reveals the monkey.",
  "New Year - the Basho-Tosei/hermitage/a-buzz with haiku.",
  "New Year -/feeling broody/from late autumn.",
  "Spring come - New Year's/gourd stuffed, five quarts/of last year's rice.",
  "Plunging hoofs stir/Futami sand - divine white/horse greets New Year.",
  "Spring night,/ cherry-/blossom dawn.",
  "Wearing straw cloaks/with spring/saints greet each other.",
  "Spring's exodus - /birds shriek,/fish eyes blink tears.",
  "Ploughing the field/for cherry-hemp -/storm echoes.",
  "Spring rain -/under trees/a crystal stream.",
  "Monk's feet clomping/through icy dark,/drawing sweet water.",
  "Spring moon -/flower face/in mist.",
  "Spring rain -/they rouse me,/old sluggard.",
  "Ebb tide -/willows/dip to mud.",
  "Sparrows in eaves,/mice in ceiling -/celestial music.",
  "Dark night -/plover crying/for its nest.",
  "Over skylark's song/Noh cry/of pheasant.",
  "How terrible/the pheasant's call -/snake-eater.",
  "Hozo mountain-pass/soars/higher than the skylark.",
  "Bush-warbler dots/the rice-ball/drying on the porch.",
  "Bucking the oven/gap - cat/yowls in heat.",
  "Do not forget the plum,/blookimg/in the thicket.",
  "Spring air -/woven moon/and plum scent.",
  "Mountain path -/sun rising/through plum scent.",
  "Another haiku?/Yet more cherry blossoms -/not my face.",
  "Sleeping willow -/soul of/the nightingale.",
  "Behind the virgins'/quarters,/one blossoming plum.",
  "First cherry/budding/by peach blossom.",
  "Red plum blossoms:/where behind the/bead-screen's love?",
  "Pretending to drink/sake from my fan,/sprinkled with cherry petals.",
  "If I'd the knack/I'd sing like/cherry flakes falling.",
  "Striding ten. twelve/miles in search of/cherry wreaths - how glorious.",
  "Under the cherry -/blossom soup,/blossom salad.",
  "Reeling with sake/and cherry blossoms,/a sworded woman in haori.",
  "Boozy on blossoms -/dark rice,/white sake.",
  "Come out, bat -/birds, earth itself/hauled off by flowers.",
  "Waterfall farlands -/tell/that to revellers.",
  "Spraying in wind,/through blossoms,/waves of Lake Grebe.",
  "Be careful where/you aim,/peaches of Fushimi.",
  "Sparrows/in rape-field,/blossom-viewing.",
  "Cold white azalea -/lone nun/under thatched roof.",
  "Draining the sake/cask - behold,/a gallon flower-vase.",
  "On my knees, hugging/roots, I grieve/for Priest Tando.",
  "Taros sprouting/at the gate,/young creepers.",
  "Search carefully -/in the hedge,/a shepherd's purse.",
  "Aged - eating/laver, my teeth/grind sand.",
  "Cherry blossoms -/lights/of years past.",
  "Squalls shake the Basho/tree - all/night my basin echoes rain.",
  "On the dead limb/squats a crow -/atumn night.",
  "Kiyotaki river -/pine needles wildfire/on the crest.",
  "Parting,/straw-clutching/for support.",
  "Yellow rose petals/thunder -/a waterfall.",
  "Whiter than stones/of Stone Mountain -/autumn wind.",
  "Sparrow, spare/the forsefly/dallying in flowers.",
  "Drizzly June -/long hair,face/sickly white.",
  "Nara's Buddhas,/one by one -/essence of asters.",
  "Darkening waves -/cry of wild ducks,/faintly white.",
  "Faceless - bones/scattered in the field,/wind cuts my flesh.",
  "Where cuckoo/vanishes -/an island.",
  "Winter downpour -/even the monkey/needs a raincoat.",
  "June clouds,/at ease on/Arashiyama peak.",
  "Butterfly -/wings curve into/white poppy.",
  "Summer wraps -/is there no end/to lice?",
  "First winter rain -/I plod on,/Traveller, my name.",
  "How quiet -/locust-shrill/pierces rock.",
  "Wild mallow fringing/the wood,/plucked by my horse.",
  "Futami friends, farewell -/ clam torn from shell,/I follow autumn.",
  "Traveller sleeps -/a sick wild duck reels/through cold night.",
  "When I bend low/enough, purseweed/beneath my fence.",
  "Poet grieving over shivering/monkey's what of this child/cast out in autumn wind?",
  "Poor boy - leaves/moon-viewing/for rice-grinding.",
  "Wake, butterfly -/it's late, we've miles/to go together.",
  "Violets -/how precious on/a mountain path.",
  "Gulping June/rains, swollen/Mogmai river.",
  "Early autumn -/rice field, ocean,/one green.",
  "Bright moon: I/stroll around the pond -/hey, dawn has come.",
  "Storming over/Lake Nio, whirlwinds/of cherry blossoms.",
  "From moon-wreathed/bamboo grove,/cuckoo song.",
  "Visiting tombs,/white-hairs bow/over canes.",
  "Skylark on moor -/sweet song/of non-attachement.",
  "Clouds -/a chance to dodge/moon-viewing.",
  "Birth of art -/song of rice planters,/chorus from nowhere.",
  "Cresting Lake Omi's/seven misted views,/Miidera's bells.",
  "Over Benkei's temple/flashing Yoshitune's/sword - May carp.",
  "Cormorant fishing:/how stirring,/how saddening.",
  "Skylark sings all/day, and day/not long enough.",
  "Year's end -/still in straw hat/and sandals.",
  "Moonlit plum tree -/wait,/spring will come.",
  "Snowy morning -/one crow/after another.",
  "Come, see real/flowers/of this painful world.",
  "Morning-glory -/it, too,/turns from me.",
  "Travel-weary,/I seek lodging -/ah, wisteria.",
  "Come, let's go/snow-viewing/till we're buried.",
  "Chrysanthemum/silence - monk/sips his morning tea.",
  "Crow's/abandoned nest,/a plum tree.",
  "Melon/in morning dew,/mud-fresh.",
  "Wintry day,/on my horse/afrozen shadow.",
  "Summer moon -/clapping hands,/I herald dawn.",
  "Drenched bush-clover,/passers-by -/both beautiful.",
  "Harsh sound -/hail spattering/my traveller's hat.",
  "Lips too chilled/for prattle -/autumn wind.",
  "Not one traveller/braves this road -/autumn night.",
  "Withered grass,/under piling/heat-waves.",
  "Phew -/dace-guts scent/waterweed.",
  "June rain,/hollyhocks turning/where sun should be.",
  "Journey's end -/still alive, this/autumn evening.",
  "How cold -/leek tips/washed white.",
  "Firefly-viewing -/drunken steersman,/drunken boat.",
  "Dewy shoulders/of my paper robe -/heat-waves."
]