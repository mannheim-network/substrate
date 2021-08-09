initSidebarItems({"enum":[["WasmLevel","The Tracing Level – the user can filter by this"],["WasmValue","A paramter value provided to the span/event"]],"fn":[["try_init_simple","Try to init a simple tracing subscriber with log compatibility layer. Ignores any error. Useful for testing."]],"macro":[["debug","Constructs an event at the debug level."],["debug_span","Constructs a span at the debug level."],["enter_span","Enter a span."],["error","Constructs an event at the error level."],["error_span","Constructs a span at the error level."],["event","Constructs a new `Event`."],["info","Constructs an event at the info level."],["info_span","Constructs a span at the info level."],["span","Constructs a new span."],["trace","Constructs an event at the trace level."],["trace_span","Constructs a span at the trace level."],["warn","Constructs an event at the warn level."],["warn_span","Constructs a span at the warn level."],["within_span","Runs given code within a tracing span, measuring it’s execution time."]],"mod":[["event","Events represent single points in time during the execution of a program."],["span","Spans represent periods of time in which a program was executing in a particular context."]],"static":[["WASM_NAME_KEY","The fieldname for the wasm-originated name"],["WASM_TARGET_KEY","The fieldname for the wasm-originated target"],["WASM_TRACE_IDENTIFIER","The identifier we are using to inject the wasm events in the generic `tracing` system"]],"struct":[["Level","Describes the level of verbosity of a span or event."],["Span","A handle representing a span, with the capability to enter the span if it exists."],["WasmEntryAttributes","Span or Event Attributes"],["WasmFieldName","The name of a field provided as the argument name when contstructing an `event!` or `span!`. Generally generated automaticaly via `stringify` from an `'static &str`. Likely print-able."],["WasmFields","A list of `WasmFieldName`s in the order provided"],["WasmMetadata","Metadata provides generic information about the specifc location of the `span!` or `event!` call on the wasm-side."],["WasmValuesSet","A list of `WasmFieldName`s with the given `WasmValue` (if provided) in the order specified."]]});