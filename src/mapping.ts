import {
  PairCreated
} from "../generated/SushiV2Factory/SushiV2Factory"
import { Pair } from "../generated/schema"

export function handlePairCreated(event: PairCreated): void {
  let entity = Pair.load(event.transaction.from.toHex())

  if (entity == null) {
    entity = new Pair(event.params.pair.toHex())
  }

  entity.token0 = event.params.token0
  entity.token1 = event.params.token1

  entity.save()
}
