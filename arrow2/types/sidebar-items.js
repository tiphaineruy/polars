initSidebarItems({"macro":[["create_relation",""],["native",""],["natural_type",""]],"mod":[["simd","Contains traits and implementations of multi-data used in SIMD. The actual representation is driven by the feature flag `\"simd\"`, which, if set, uses `packed_simd2` to get the intrinsics."]],"struct":[["BitChunkIter","An iterator of `bool` over a [`BitChunk`]. This iterator is often compiled to SIMD instructions. The LSB corresponds to the first slot, as defined by the arrow specification."],["IndexRange","iterator of [`Index`] equivalent to `(a..b)`."],["days_ms","The in-memory representation of the DayMillisecond variant of arrow’s “Interval” logical type."],["months_days_ns","The in-memory representation of the MonthDayNano variant of the “Interval” logical type."]],"trait":[["BitChunk","Something that can be use as a chunk of bits. This is used to create masks of a given number of lengths, whose width is `1`. In `simd_packed` notation, this corresponds to `m1xY`."],["Index","Types that can be used to index a slot of an array."],["NativeType","Declares any type that can be allocated, serialized and deserialized by this crate. All data-heavy memory operations are implemented for this trait alone."],["NaturalDataType","Trait denoting anything that has a natural logical [`DataType`]. For example, [`DataType::Int32`] for `i32`."],["Relation","describes whether a [`DataType`] is valid."]]});