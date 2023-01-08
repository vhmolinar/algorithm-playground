def generate_document(characters, document):
    if len(document) == 0:
        return True

    chars_map = {}
    for i in range(0, len(characters)):
        char_at = characters[i]
        if char_at not in chars_map:
            chars_map[char_at] = 1
        else:
            chars_map[char_at] += 1

    for char in document:
        if char not in chars_map:
            return False
        qty = chars_map[char]
        if qty == 0:
            return False
        chars_map[char] -= 1
    return True

if __name__ == "__main__":
  assert generate_document('aheaolabbhb', 'hello') == False
  assert generate_document('Bste!hetsi ogEAxpelrt x ', 'AlgoExpert is the Best!') == True
