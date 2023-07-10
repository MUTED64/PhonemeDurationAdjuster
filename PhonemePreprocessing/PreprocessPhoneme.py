import os
import json

vowels_tag = ["vowel", "coda", "diphthong"]

if __name__ == '__main__':
    # read phoneme files to dict
    phoneme_files = os.listdir('PhonemeFiles')
    phoneme_dict = {}
    for phoneme_file in phoneme_files:
        language = phoneme_file[7:-4]
        phoneme_dict[language] = {"vowels": [], "consonants": []}
        with open('PhonemeFiles/' + phoneme_file, 'r') as f:
            for line in f.readlines():
                phoneme_tag_list = line.split()
                if phoneme_tag_list[1] in vowels_tag:
                    phoneme_dict[language]["vowels"].append(phoneme_tag_list[0])
                else:
                    phoneme_dict[language]["consonants"].append(phoneme_tag_list[0])

    # dict to json
    with open('phoneme.json', 'w') as f:
        json.dump(phoneme_dict, f)

    # 聚合元素
    vowels = []
    consonants = []
    for language in phoneme_dict:
        vowels += phoneme_dict[language]["vowels"]
        consonants += phoneme_dict[language]["consonants"]
    for vowel in vowels:
        if vowel in consonants:
            print(vowel)