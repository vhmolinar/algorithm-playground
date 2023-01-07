# first:
# create a map of places for blocks, where each key is a type of place for a list of blocks having it
#
# second:
# iterate through each block calculation a cost for it where the cost "formula" is:
# MAX(distance of each place the block doesnt own) and store it to a variable if its cost is the most
# optimal than any previous one
#
# third:
# return the most optimized block stored into the variable

# T: O(br)
# S: O(br)
def apartment_hunting(blocks, reqs):
    places_map = {}
    min_cost_block = 100**100
    block_idx = None

    for i in range(0, len(blocks)):
        block = blocks[i]
        for req in reqs:
            if not block[req]:
                continue
            if req not in places_map:
                blocks_ids = [i]
                places_map[req] = blocks_ids
            else:
                places_map[req].append(i)

    for i in range(0, len(blocks)):
        block = blocks[i]
        block_cost = 0
        for req in reqs:
            if not block[req]:
                distances = []
                for other_block_idx in places_map[req]:
                    distances.append(abs(other_block_idx - i))
                closest_distance = min(distances)
                if closest_distance > block_cost:
                    block_cost = closest_distance

        if block_cost < min_cost_block:
            min_cost_block = block_cost
            block_idx = i

    return block_idx


def new_block(owned_places, not_owned_places):
  block = {}
  for place in owned_places:
    block[place] = True
  for place in not_owned_places:
    block[place] = False
  return block

if __name__ == "__main__":
  blocks = [
    new_block(['school'], ['gym', 'store']),
    new_block(['gym'], ['school', 'store']),
    new_block(['gym', 'school'], [ 'store']),
    new_block(['school'], ['gym', 'store']),
    new_block(['school', 'store'], ['gym']),
  ]

  assert apartment_hunting(blocks, ['gym', 'school', 'store']) == 3
