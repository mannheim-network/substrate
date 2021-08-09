initSidebarItems({"enum":[["AccountKeyring","Set of test accounts."],["Ed25519Keyring","Set of test accounts."],["ExecutionStrategy","Strategy for executing a call into the runtime."],["Sr25519Keyring","Set of test accounts."],["WasmExecutionMethod","Specification of different methods of executing the runtime Wasm code."]],"fn":[["new","Creates new client instance used for tests."],["new_light","Creates new light client instance used for tests."],["new_light_fetcher","Creates new light client fetcher used for tests."],["new_native_executor","Create a new native executor."]],"mod":[["client","Substrate Client and associated logic."],["client_ext","Client extension for tests."],["prelude","A prelude to import in tests."],["sc_client_db","Client backend that is backed by a database."],["sc_executor","A crate that provides means of executing/dispatching calls into the runtime."],["sp_consensus","Common utilities for building and using consensus engines in substrate."],["trait_tests","tests that should hold for all implementations of certain traits. to test implementations without duplication."]],"struct":[["Backend","Disk backend."],["ExecutionExtensions","A producer of execution extensions for offchain calls."],["ExecutionStrategies","Execution strategies settings."],["GenesisParameters","Parameters of test-client builder with test-runtime."],["LightFetcher","Implementation of light client fetcher used in tests."],["LocalExecutor","A unit struct which implements `NativeExecutionDispatch` feeding in the hard-coded runtime."],["LongestChain","Implement Longest Chain Select implementation where ‘longest’ is defined as the highest number of blocks"],["NativeExecutor","A generic `CodeExecutor` implementation that uses a delegate to determine wasm code equivalence and dispatch to native code when possible, falling back on `WasmExecutor` when not."],["RpcHandlers","RPC handlers that can perform RPC queries."],["RpcSession","An RPC session. Used to perform in-memory RPC queries (ie. RPC queries that don’t go through the HTTP or WebSockets server)."],["RpcTransactionError","An error for when the RPC call fails."],["RpcTransactionOutput","The output of an RPC transaction."],["Storage","Struct containing data needed for a storage."],["StorageChild","Child trie storage data."],["TestClientBuilder","A builder for creating a test client instance."]],"trait":[["BlockBuilderExt","Extension trait for test block builder."],["BlockchainEventsExt","An extension trait for `BlockchainEvents`."],["ClientBlockImportExt","Extension trait for a test client around block importing."],["ClientExt","Extension trait for a test client."],["DefaultTestClientBuilderExt","A `TestClientBuilder` with default backend and executor."],["GenesisInit","A genesis storage initialization trait."],["RpcHandlersExt","An extension trait for `RpcHandlers`."],["SyncCryptoStore","Sync version of the CryptoStore"],["TestClientBuilderExt","A `test-runtime` extensions to `TestClientBuilder`."]],"type":[["Backend","Test client database backend."],["BadBlocks","Known bad block hashes."],["Client","Test client type with `LocalExecutor` and generic Backend."],["Executor","Test client executor."],["ForkBlocks","Expected hashes of blocks at given heights."],["LightBackend","Test client light database backend."],["LightBackend","Test client light database backend."],["LightExecutor","Test client light executor."],["SyncCryptoStorePtr","A pointer to a keystore."],["TestClient","A test client with default backend."],["TestClientBuilder","A `TestClient` with `test-runtime` builder."]]});