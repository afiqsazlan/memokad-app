import type {Deck} from "@/types/deck";

const almulk: Deck = {
    title: 'Al-Mulk',
    slug: 'al-mulk',
    modes: ['sequential', 'shuffled'],
    cards: [
        {
            front: "تَبَـٰرَكَ ٱلَّذِى بِيَدِهِ",
            back: "ٱلْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ",
            description: "Ayat 1"
        },
        {
            front: "ٱلَّذِى خَلَقَ ٱلْمَوْتَ",
            back: "وَٱلْحَيَوٰةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًۭا ۚ وَهُوَ ٱلْعَزِيزُ ٱلْغَفُورُُ",
            description: "Ayat 2"
        },
        {
            front: "ٱلَّذِى خَلَقَ سَبْعَ سَمَـٰوَٰتٍۢ طِبَاقًۭا َۖ",
            back: "مَّا تَرَىٰ فِى خَلْقِ ٱلرَّحْمَـٰنِ مِن تَفَـٰوُتٍۢ ۖ فَٱرْجِعِ ٱلْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍۢ",
            description: "Ayat 3"
        },
        {
            front: "ثُمَّ ٱرْجِعِ ٱلْبَصَرَ كَرَّتَيْنِ يَنقَلِبَْۖ",
            back: "إِلَيْكَ ٱلْبَصَرُ خَاسِئًۭا وَهُوَ حَسِيرٌٍۭۢ",
            description: "Ayat 4"
        },
        {
            front: "وَلَقَدْ زَيَّنَّا ٱلسَّمَآءَ ٱلدُّنْيَا بِمَصَـٰبِيحَ",
            back: "بِمَصَـٰبِيحَ وَجَعَلْنَـٰهَا رُجُومًۭا لِّلشَّيَـٰطِينِ ۖ وَأَعْتَدْنَا لَهُمْ عَذَابَ ٱلسَّعِيرٌٍِۭۢ",
            description: "Ayat 5"
        },
        {
            front: "وَلِلَّذِينَ كَفَرُوا۟ بِرَبِّهِمْ",
            back: "عَذَابُ جَهَنَّمَ ۖ وَبِئْسَ ٱلْمَصِيرُ",
            description: "Ayat 6"
        },
        {
            front: "إِذَآ أُلْقُوا۟ فِيهَا سَمِعُوا۟",
            back: "لَهَا شَهِيقًۭا وَهِىَ تَفُورُ",
            description: "Ayat 7"
        },
        {
            front: "تَكَادُ تَمَيَّزُ مِنَ ٱلْغَيْظِ ۖ",
            back: "ٱلْغَيْظِ ۖ كُلَّمَآ أُلْقِىَ فِيهَا فَوْجٌۭ سَأَلَهُمْ خَزَنَتُهَآ أَلَمْ يَأْتِكُمْ نَذِيرٌۭ",
            description: "Ayat 8"
        },
        {
            front: "قَالُوا۟ بَلَىٰ قَدْ جَآءَنَا نَذِيرٌۭ",
            back: "فَكَذَّبْنَا وَقُلْنَا مَا نَزَّلَ ٱللَّهُ مِن شَىْءٍ إِنْ أَنتُمْ إِلَّا فِى ضَلَـٰلٍۢ كَبِيرٍۢ",
            description: "Ayat 9"
        },
        {
            front: "وَقَالُوا۟ لَوْ كُنَّا نَسْمَعُ",
            back: "أَوْ نَعْقِلُ مَا كُنَّا فِىٓ أَصْحَـٰبِ ٱلسَّعِيرِ",
            description: "Ayat 10"
        },
        {
            front: "فَٱعْتَرَفُوا۟ بِذَنۢبِهِمْ",
            back: "فَسُحْقًۭا لِّأَصْحَـٰبِ ٱلسَّعِيرِ",
            description: "Ayat 11"
        },
        {
            front: "إِنَّ ٱلَّذِينَ يَخْشَوْنَ رَبَّهُم",
            back: "بِٱلْغَيْبِ لَهُم مَّغْفِرَةٌۭ وَأَجْرٌۭ كَبِيرٌۭ",
            description: "Ayat 12"
        },
        {
            front: "وَأَسِرُّوا۟ قَوْلَكُمْ أَوِ ٱجْهَرُوا۟ بِهِۦٓ ۖ",
            back: "إِنَّهُۥ عَلِيمٌۢ بِذَاتِ ٱلصُّدُورِ",
            description: "Ayat 13"
        },
        {
            front: "أَلَا يَعْلَمُ مَنْ خَلَقَ",
            back: "وَهُوَ ٱللَّطِيفُ ٱلْخَبِيرُ",
            description: "Ayat 14"
        },
        {
            front: "هُوَ ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ",
            back: "ذَلُولًۭا فَٱمْشُوا۟ فِى مَنَاكِبِهَا وَكُلُوا۟ مِن رِّزْقِهِۦ ۖ وَإِلَيْهِ ٱلنُّشُورُ",
            description: "Ayat 15"
        },
        {
            front: "ءَأَمِنتُم مَّن فِى ٱلسَّمَآءِ",
            back: "أَن يَخْسِفَ بِكُمُ ٱلْأَرْضَ فَإِذَا هِىَ تَمُورُ",
            description: "Ayat 16"
        },
        {
            front: "أَمْ أَمِنتُم مَّن فِى ٱلسَّمَآءِ",
            back: "أَن يُرْسِلَ عَلَيْكُمْ حَاصِبًۭا ۖ فَسَتَعْلَمُونَ كَيْفَ نَذِيرِ",
            description: "Ayat 17"
        },
        {
            front: "وَلَقَدْ كَذَّبَ ٱلَّذِينَ مِن",
            back: "قَبْلِهِمْ فَكَيْفَ كَانَ نَكِيرِ",
            description: "Ayat 18"
        },
        {
            front: "أَوَلَمْ يَرَوْا۟ إِلَى ٱلطَّيْرِ",
            back: "فَوْقَهُمْ صَـٰٓفَّـٰتٍۢ وَيَقْبِضْنَ ۚ مَا يُمْسِكُهُنَّ إِلَّا ٱلرَّحْمَـٰنُ ۚ إِنَّهُۥ بِكُلِّ شَىْءٍۭ بَصِيرٌ",
            description: "Ayat 19"
        },
        {
            front: "أَمَّنْ هَـٰذَا ٱلَّذِى هُوَ جُندٌۭ لَّكُمْ",
            back: "يَنصُرُكُم مِّن دُونِ ٱلرَّحْمَـٰنِ ۚ إِنِ ٱلْكَـٰفِرُونَ إِلَّا فِى غُرُورٍ",
            description: "Ayat 20"
        },
        {
            front: "أَمَّنْ هَـٰذَا ٱلَّذِى يَرْزُقُكُمْ",
            back: "إِنْ أَمْسَكَ رِزْقَهُۥ ۚ بَل لَّجُّوا۟ فِى عُتُوٍّۢ وَنُفُورٍ",
            description: "Ayat 21"
        },
        {
            front: "أَفَمَن يَمْشِى مُكِبًّا عَلَىٰ وَجْهِهِۦٓ",
            back: "أَهْدَىٰٓ أَمَّن يَمْشِى سَوِيًّا عَلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ",
            description: "Ayat 22"
        },
        {
            front: "قُلْ هُوَ ٱلَّذِىٓ أَنشَأَكُمْ",
            back: "وَجَعَلَ لَكُمُ ٱلسَّمْعَ وَٱلْأَبْصَـٰرَ وَٱلْأَفْـِٔدَةَ ۖ قَلِيلًۭا مَّا تَشْكُرُونَ",
            description: "Ayat 23"
        },
        {
            front: "قُلْ هُوَ ٱلَّذِى ذَرَأَكُمْ",
            back: "فِى ٱلْأَرْضِ وَإِلَيْهِ تُحْشَرُونَ",
            description: "Ayat 24"
        },
        {
            front: "وَيَقُولُونَ مَتَىٰ هَـٰذَا",
            back: "هَـٰذَا ٱلْوَعْدُ إِن كُنتُمْ صَـٰدِقِينَ",
            description: "Ayat 25"
        },
        {
            front: "قُلْ إِنَّمَا ٱلْعِلْمُ عِندَ",
            back: "عِندَ ٱللَّهِ وَإِنَّمَآ أَنَا۠ نَذِيرٌۭ مُّبِينٌۭ",
            description: "Ayat 26"
        },
        {
            front: "فَلَمَّا رَأَوْهُ زُلْفَةًۭ سِيٓـَٔتْ وُجُوهُ",
            back: "ٱلَّذِينَ كَفَرُوا۟ وَقِيلَ هَـٰذَا ٱلَّذِى كُنتُم بِهِۦ تَدَّعُونَ",
            description: "Ayat 27"
        },
        {
            front: "قُلْ أَرَءَيْتُمْ إِنْ أَهْلَكَنِىَ ٱللَّهُ",
            back: "وَمَن مَّعِىَ أَوْ رَحِمَنَا فَمَن يُجِيرُ ٱلْكَـٰفِرِينَ مِنْ عَذَابٍ أَلِيمٍۢ",
            description: "Ayat 28"
        },
        {
            front: "قُلْ هُوَ ٱلرَّحْمَـٰنُ ءَامَنَّا بِهِۦ",
            back: "وَعَلَيْهِ تَوَكَّلْنَا ۖ فَسَتَعْلَمُونَ مَنْ هُوَ فِى ضَلَـٰلٍۢ مُّبِينٍۢ",
            description: "Ayat 29"
        },
        {
            front: "قُلْ أَرَءَيْتُمْ إِنْ أَصْبَحَ مَآؤُكُمْ غَوْرًۭا",
            back: "فَمَن يَأْتِيكُم بِمَآءٍۢ مَّعِينٍۭ",
            description: "Ayat 30"
        },
    ]
}

export default almulk