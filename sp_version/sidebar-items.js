initSidebarItems({"attr":[["runtime_version","An attribute that accepts a version declaration of a runtime and generates a custom wasm section with the equivalent contents."]],"macro":[["create_apis_vec","Create a vector of Api declarations."],["create_runtime_str","Create a const [`RuntimeString`]."]],"mod":[["embed","Provides functionality to embed a `RuntimeVersion` as custom section into a WASM file."]],"struct":[["NativeVersion",""],["RuntimeVersion","Runtime version. This should not be thought of as classic Semver (major/minor/tiny). This triplet have different semantics and mis-interpretation could cause problems. In particular: bug fixes should result in an increment of `spec_version` and possibly `authoring_version`, absolutely not `impl_version` since they change the semantics of the runtime."]],"trait":[["GetRuntimeVersion","Something that can provide the runtime version at a given block and the native runtime version."]],"type":[["ApiId","The identity of a particular API interface that the runtime might provide."],["ApisVec","A vector of pairs of `ApiId` and a `u32` for version."]]});