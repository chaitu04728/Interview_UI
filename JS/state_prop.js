/*

Feature	                          Props	                                                  State
Data Flow	                   Unidirectional (parent to child)	                Internal to the component, managed by it
Mutability	                   Immutable (read-only)	                        Mutable (can be changed)
Ownership	                   Owned by the parent component	                Owned by the component itself
Purpose	                       Pass data/functions, configure children	        Manage internal, dynamic data
Control	                       External (controlled by parent)	                Internal (controlled by the component)
Re-render	                   Changing parent props can re-render child        Changing state causes component re-render



*/