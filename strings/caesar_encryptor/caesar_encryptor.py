def caesarCipherEncryptor(input, key):
  enctrypted: str = ''

  a_representation: int = 97
  z_representation: int = 122
  alphabet_count: int = 26

  safe_key: int = key
  if key > alphabet_count:
    diff: int = key % alphabet_count
    if diff == 0:
      safe_key = 0
    else:
      safe_key = diff

  for idx in range(0, len(input)):
    char: str = input[idx]

    char_representation: int = ord(char)
    char_representation += safe_key

    if char_representation > z_representation:
      char_representation = a_representation + char_representation - z_representation - 1

    enctrypted += chr(char_representation)

  return enctrypted


def main():
  assert caesarCipherEncryptor("xyz", 2) == "zab"
  assert caesarCipherEncryptor("abc", 52) == "abc"

if __name__ == "__main__":
  main()
