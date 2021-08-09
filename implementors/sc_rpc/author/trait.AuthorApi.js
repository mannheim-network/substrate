(function() {var implementors = {};
implementors["sc_rpc"] = [{"text":"impl&lt;P, Client&gt; <a class=\"trait\" href=\"sc_rpc/author/trait.AuthorApi.html\" title=\"trait sc_rpc::author::AuthorApi\">AuthorApi</a>&lt;&lt;P as <a class=\"trait\" href=\"sc_transaction_pool_api/trait.TransactionPool.html\" title=\"trait sc_transaction_pool_api::TransactionPool\">TransactionPool</a>&gt;::<a class=\"type\" href=\"sc_transaction_pool_api/trait.TransactionPool.html#associatedtype.Hash\" title=\"type sc_transaction_pool_api::TransactionPool::Hash\">Hash</a>, &lt;&lt;P as <a class=\"trait\" href=\"sc_transaction_pool_api/trait.TransactionPool.html\" title=\"trait sc_transaction_pool_api::TransactionPool\">TransactionPool</a>&gt;::<a class=\"type\" href=\"sc_transaction_pool_api/trait.TransactionPool.html#associatedtype.Block\" title=\"type sc_transaction_pool_api::TransactionPool::Block\">Block</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"type\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>&gt; for <a class=\"struct\" href=\"sc_rpc/author/struct.Author.html\" title=\"struct sc_rpc::author::Author\">Author</a>&lt;P, Client&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"sc_transaction_pool_api/trait.TransactionPool.html\" title=\"trait sc_transaction_pool_api::TransactionPool\">TransactionPool</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: <a class=\"trait\" href=\"sp_blockchain/backend/trait.HeaderBackend.html\" title=\"trait sp_blockchain::backend::HeaderBackend\">HeaderBackend</a>&lt;P::<a class=\"type\" href=\"sc_transaction_pool_api/trait.TransactionPool.html#associatedtype.Block\" title=\"type sc_transaction_pool_api::TransactionPool::Block\">Block</a>&gt; + <a class=\"trait\" href=\"sp_api/trait.ProvideRuntimeApi.html\" title=\"trait sp_api::ProvideRuntimeApi\">ProvideRuntimeApi</a>&lt;P::<a class=\"type\" href=\"sc_transaction_pool_api/trait.TransactionPool.html#associatedtype.Block\" title=\"type sc_transaction_pool_api::TransactionPool::Block\">Block</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Client::<a class=\"type\" href=\"sp_api/trait.ProvideRuntimeApi.html#associatedtype.Api\" title=\"type sp_api::ProvideRuntimeApi::Api\">Api</a>: <a class=\"trait\" href=\"sp_session/trait.SessionKeys.html\" title=\"trait sp_session::SessionKeys\">SessionKeys</a>&lt;P::<a class=\"type\" href=\"sc_transaction_pool_api/trait.TransactionPool.html#associatedtype.Block\" title=\"type sc_transaction_pool_api::TransactionPool::Block\">Block</a>&gt;,&nbsp;</span>","synthetic":false,"types":["sc_rpc::author::Author"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()