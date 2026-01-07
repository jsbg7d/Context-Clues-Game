// Word database with sentences and definitions
// Progressive difficulty: Level 1-3 (easy), 4-7 (medium), 8-10 (hard)
// Definition strategy: 3 similar/plausible definitions + 1 obviously wrong/unrelated
const wordDatabase = {
    easy: [
        {
            word: "ambitious",
            sentence: "The _____ student set a goal to become valedictorian by senior year.",
            correctDefinition: "Having a strong desire to achieve success or reach a goal",
            wrongDefinitions: [
                "Having a strong wish to help others without personal gain",
                "Possessing a strong interest in learning new skills",
                "Relating to ambulances or emergency medical services"
            ]
        },
        {
            word: "cautious",
            sentence: "After slipping on ice last winter, Maria became more _____ when walking in snowy conditions.",
            correctDefinition: "Careful to avoid potential problems or dangers",
            wrongDefinitions: [
                "Careful to check the weather before going outside",
                "Watchful and alert to changes in the environment",
                "Creating heat through chemical reactions"
            ]
        },
        {
            word: "generous",
            sentence: "The _____ millionaire donated half his fortune to charity.",
            correctDefinition: "Willing to give more than is necessary or expected",
            wrongDefinitions: [
                "Willing to share resources with family members",
                "Ready to help those in financial need",
                "Relating to genetic inheritance or heredity"
            ]
        },
        {
            word: "peculiar",
            sentence: "The antique shop had a _____ smell that reminded visitors of old books and leather.",
            correctDefinition: "Strange or unusual in a way that attracts attention",
            wrongDefinitions: [
                "Distinctive or unique in a noticeable way",
                "Different from what is commonly experienced",
                "Relating to money or financial transactions"
            ]
        },
        {
            word: "reluctant",
            sentence: "The child was _____ to share his toys with the other children at the playground.",
            correctDefinition: "Unwilling or hesitant to do something",
            wrongDefinitions: [
                "Hesitant or uncertain about making a decision",
                "Resistant to changing one's behavior or habits",
                "Shining or glowing with reflected light"
            ]
        },
        {
            word: "transparent",
            sentence: "The politician promised to be _____ about the campaign's funding sources.",
            correctDefinition: "Open and honest, without secrets or hidden information",
            wrongDefinitions: [
                "Clear and straightforward in communication",
                "Willing to disclose important information freely",
                "Able to be moved from one place to another"
            ]
        },
        {
            word: "vital",
            sentence: "Regular exercise is _____ for maintaining good health and preventing disease.",
            correctDefinition: "Absolutely necessary or essential for something",
            wrongDefinitions: [
                "Highly important for achieving desired results",
                "Crucial for supporting basic life functions",
                "Relating to vitamins or nutritional supplements"
            ]
        },
        {
            word: "adequate",
            sentence: "The hotel room was small but _____ for our weekend stay.",
            correctDefinition: "Sufficient or good enough for a particular purpose",
            wrongDefinitions: [
                "Acceptable or satisfactory for basic needs",
                "Meeting the minimum requirements for comfort",
                "Having received proper education or training"
            ]
        },
        {
            word: "hostile",
            sentence: "The dog became _____ when strangers approached its owner's property.",
            correctDefinition: "Unfriendly or aggressive toward others",
            wrongDefinitions: [
                "Aggressive or threatening in behavior",
                "Unwelcoming or antagonistic in attitude",
                "Relating to hotels or hospitality services"
            ]
        },
        {
            word: "modest",
            sentence: "Despite winning the championship, the athlete remained _____ about her accomplishments.",
            correctDefinition: "Not boastful or arrogant about one's abilities or achievements",
            wrongDefinitions: [
                "Humble or unassuming about personal success",
                "Restrained or understated in self-presentation",
                "Following the latest fashion or style trends"
            ]
        },
        {
            word: "diligent",
            sentence: "The _____ researcher spent years carefully documenting every species in the rainforest.",
            correctDefinition: "Showing careful and persistent effort in one's work",
            wrongDefinitions: [
                "Hardworking and thorough in completing tasks",
                "Devoted and attentive to one's responsibilities",
                "Traveling by stagecoach or horse-drawn carriage"
            ]
        },
        {
            word: "frivolous",
            sentence: "The judge dismissed the _____ lawsuit as a waste of the court's time.",
            correctDefinition: "Lacking in seriousness or importance; trivial",
            wrongDefinitions: [
                "Unimportant or not worthy of serious consideration",
                "Silly or lacking proper gravity for the situation",
                "Extremely cold or characterized by freezing temperatures"
            ]
        }
    ],
    medium: [
        {
            word: "circumspect",
            sentence: "The lawyer was _____ in his statements to the press, carefully avoiding any comments that could prejudice the case.",
            correctDefinition: "Wary and unwilling to take risks; cautious",
            wrongDefinitions: [
                "Careful and prudent in avoiding potential mistakes",
                "Guarded and deliberate when facing uncertain situations",
                "Traveling in a circular path or route"
            ]
        },
        {
            word: "insipid",
            sentence: "The critic described the novel as _____, lacking any original ideas or compelling characters.",
            correctDefinition: "Lacking flavor, vigor, or interest; dull",
            wrongDefinitions: [
                "Boring or uninteresting without distinctive qualities",
                "Bland and uninspiring in content or presentation",
                "Looking inward at one's own thoughts and feelings"
            ]
        },
        {
            word: "assiduous",
            sentence: "Through _____ practice every morning for five years, she finally mastered the violin.",
            correctDefinition: "Showing great care and perseverance; diligent",
            wrongDefinitions: [
                "Persistent and dedicated in pursuing a goal",
                "Hardworking and thorough in one's efforts",
                "Having a sour or acidic taste or quality"
            ]
        },
        {
            word: "provincial",
            sentence: "His _____ attitude toward modern art prevented him from appreciating experimental works.",
            correctDefinition: "Unsophisticated or narrow-minded; limited in perspective",
            wrongDefinitions: [
                "Limited in understanding due to lack of exposure",
                "Narrow in outlook or restricted in viewpoint",
                "Temporary or lasting for only a brief period"
            ]
        },
        {
            word: "perfunctory",
            sentence: "The manager gave only a _____ glance at my proposal before rejecting it.",
            correctDefinition: "Carried out with minimal effort or care; cursory",
            wrongDefinitions: [
                "Done superficially without genuine attention",
                "Performed hastily with little thought or interest",
                "Relating to pleasant fragrances or perfumes"
            ]
        },
        {
            word: "equivocal",
            sentence: "The politician's _____ response to the scandal left voters uncertain about his actual position.",
            correctDefinition: "Open to more than one interpretation; ambiguous",
            wrongDefinitions: [
                "Unclear or vague in meaning or intent",
                "Deliberately evasive to avoid taking a firm stance",
                "Equal in voice or volume when speaking"
            ]
        },
        {
            word: "petulant",
            sentence: "The child grew _____ when told he couldn't have dessert before dinner.",
            correctDefinition: "Childishly sulky or bad-tempered; irritable",
            wrongDefinitions: [
                "Easily annoyed or quick to show displeasure",
                "Moody and ill-humored about minor frustrations",
                "Covered with flower petals or botanical decorations"
            ]
        },
        {
            word: "anachronistic",
            sentence: "The film's depiction of medieval knights using gunpowder was glaringly _____.",
            correctDefinition: "Belonging to a period other than that being portrayed",
            wrongDefinitions: [
                "Out of place in the historical time period shown",
                "Inconsistent with the era being represented",
                "Occurring without any chronological order or sequence"
            ]
        },
        {
            word: "laconic",
            sentence: "His _____ reply of 'Fine' told me nothing about how the interview actually went.",
            correctDefinition: "Using very few words; terse",
            wrongDefinitions: [
                "Brief and concise to the point of being unhelpful",
                "Economical with words in a way that limits detail",
                "Lacking in energy or motivation; lethargic"
            ]
        },
        {
            word: "bellicose",
            sentence: "The senator's _____ rhetoric about military intervention alarmed peace advocates.",
            correctDefinition: "Demonstrating aggression and willingness to fight",
            wrongDefinitions: [
                "Combative or hostile in tone and manner",
                "Favoring confrontation over peaceful resolution",
                "Having a beautiful or melodious speaking voice"
            ]
        },
        {
            word: "pragmatic",
            sentence: "The manager took a _____ approach, focusing on solutions that could be implemented immediately.",
            correctDefinition: "Dealing with things practically rather than theoretically",
            wrongDefinitions: [
                "Practical and focused on realistic outcomes",
                "Concerned with what works rather than abstract ideals",
                "Relating to grammar or linguistic structure"
            ]
        },
        {
            word: "tenacious",
            sentence: "The _____ detective refused to give up on the cold case, even after twenty years.",
            correctDefinition: "Holding firmly to a purpose or belief; persistent",
            wrongDefinitions: [
                "Determined and unwilling to abandon a course of action",
                "Stubbornly persistent in pursuing a goal",
                "Living in rental housing or as a tenant"
            ]
        },
        {
            word: "candid",
            sentence: "I appreciated her _____ feedback about my presentation, even though it was hard to hear.",
            correctDefinition: "Truthful and straightforward; frank",
            wrongDefinitions: [
                "Honest and direct in expressing opinions",
                "Open and sincere without hiding the truth",
                "Covered with a sweet sugar coating or glaze"
            ]
        },
        {
            word: "whimsical",
            sentence: "The artist's _____ sculptures featured unexpected combinations of ordinary objects.",
            correctDefinition: "Playfully quaint or fanciful, especially in an amusing way",
            wrongDefinitions: [
                "Imaginative and unconventional in a charming way",
                "Quirky and creative with unpredictable elements",
                "Making a soft whimpering or crying sound"
            ]
        }
    ],
    hard: [
        {
            word: "pusillanimous",
            sentence: "His _____ refusal to confront the bully made him unpopular among his peers.",
            correctDefinition: "Showing a lack of courage or determination; timid",
            wrongDefinitions: [
                "Cowardly or lacking in bravery when facing challenges",
                "Timid and unwilling to take bold action",
                "Characterized by a large number of small animals"
            ]
        },
        {
            word: "perspicacious",
            sentence: "The _____ detective noticed the almost imperceptible inconsistency in the suspect's alibi.",
            correctDefinition: "Having keen mental perception and understanding; discerning",
            wrongDefinitions: [
                "Insightful and able to perceive subtle details",
                "Astute and quick to understand complex situations",
                "Sweating profusely due to heat or exertion"
            ]
        },
        {
            word: "obsequious",
            sentence: "The intern's _____ behavior toward the CEO made his colleagues uncomfortable.",
            correctDefinition: "Obedient or attentive to an excessive degree; servile",
            wrongDefinitions: [
                "Excessively submissive or fawning toward superiors",
                "Overly deferential in seeking to please those in power",
                "Following in a sequential or consecutive order"
            ]
        },
        {
            word: "truculent",
            sentence: "The union leader's _____ stance during negotiations prolonged the strike for weeks.",
            correctDefinition: "Eager or quick to argue or fight; aggressively defiant",
            wrongDefinitions: [
                "Combative and unwilling to compromise on demands",
                "Hostile and confrontational in dealing with opposition",
                "Operating large trucks or commercial vehicles"
            ]
        },
        {
            word: "pellucid",
            sentence: "Her _____ explanation of the complex theorem helped every student understand it perfectly.",
            correctDefinition: "Translucently clear; easily understood",
            wrongDefinitions: [
                "Lucid and transparent in presentation of ideas",
                "Crystal clear in meaning without confusion",
                "Relating to pelicans or other large water birds"
            ]
        },
        {
            word: "insouciant",
            sentence: "Despite the looming deadline, he maintained an _____ attitude that frustrated his anxious teammates.",
            correctDefinition: "Showing a casual lack of concern; nonchalant",
            wrongDefinitions: [
                "Unconcerned and relaxed about serious matters",
                "Carefree and indifferent to potential problems",
                "Lacking adequate insurance coverage or protection"
            ]
        },
        {
            word: "recalcitrant",
            sentence: "The _____ witness refused to testify despite multiple court orders.",
            correctDefinition: "Having an obstinately uncooperative attitude; stubborn",
            wrongDefinitions: [
                "Stubbornly defiant toward authority or requests",
                "Resisting control or direction through obstinance",
                "Able to recalculate mathematical equations quickly"
            ]
        },
        {
            word: "grandiloquent",
            sentence: "The senator's _____ speech was full of pompous phrases but lacked substantive policy proposals.",
            correctDefinition: "Pompous or extravagant in language, style, or manner",
            wrongDefinitions: [
                "Using inflated rhetoric to sound impressive",
                "Speaking in an ornate and pretentious manner",
                "Extremely eloquent and persuasive in speech"
            ]
        },
        {
            word: "stentorian",
            sentence: "The drill sergeant's _____ voice could be heard clearly across the entire parade ground.",
            correctDefinition: "Loud and powerful in sound",
            wrongDefinitions: [
                "Booming and forceful in volume and projection",
                "Commanding and resonant enough to carry long distances",
                "Using shorthand or abbreviated writing methods"
            ]
        },
        {
            word: "prolix",
            sentence: "The author's _____ writing style turned a simple story into an unnecessarily long novel.",
            correctDefinition: "Using or containing too many words; tediously lengthy",
            wrongDefinitions: [
                "Excessively wordy to the point of being tiresome",
                "Verbose and drawn-out without adding value",
                "Occurring before the main event; preliminary"
            ]
        },
        {
            word: "ebullient",
            sentence: "The team's _____ celebration after winning the championship lasted well into the night.",
            correctDefinition: "Cheerful and full of energy; enthusiastic",
            wrongDefinitions: [
                "Joyfully exuberant and overflowing with excitement",
                "Bubbling over with enthusiasm and high spirits",
                "Boiling or producing large amounts of bubbles"
            ]
        },
        {
            word: "lugubrious",
            sentence: "The funeral director's _____ expression seemed almost theatrical in its display of sorrow.",
            correctDefinition: "Looking or sounding sad and dismal; mournful",
            wrongDefinitions: [
                "Excessively sorrowful or gloomy in appearance",
                "Melancholy and expressing deep sadness",
                "Slippery or greasy in texture or consistency"
            ]
        },
        {
            word: "sanguine",
            sentence: "Despite the economic downturn, the CEO remained _____ about the company's future prospects.",
            correctDefinition: "Optimistic or positive, especially in a difficult situation",
            wrongDefinitions: [
                "Hopeful and confident about future outcomes",
                "Maintaining a cheerful outlook despite challenges",
                "Relating to blood or bloodshed in battle"
            ]
        }
    ]
};
