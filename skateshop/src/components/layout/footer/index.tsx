'use client'
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");

    return (
    <footer className="w-full border-t bg-background px-24">
       <div className="grid items-center gap-8 pb-8 pt-6 lg:py-6 container">
        <div>
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
                <div>
                    <a className="flex w-fit items-center space-x-2" href="/"> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="size-6" aria-hidden="true">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="7" cy="15" r="2" />
                            <circle cx="17" cy="15" r="2"/>
                            <path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" />
                        </svg>
                        <span className="font-bold">Skateshop</span>
                    </a>
                </div>

                <div className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h4 className="text-base font-medium">Credits</h4>
                        <ul className="space-y-2.5">
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="https://onestopshop.jackblatch.com">
                                    OneStopShop
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="https://acme-corp.jumr.dev">
                                Acme Corp
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="https://craft.mxkaske.dev">
                                    craft.mxkaske.dev
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="https://tx.shadcn.com/">
                                    Taxonomy
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="https://ui.shadcn.com">
                                    shadcn/ui
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-base font-medium">Help</h4>
                        <ul className="space-y-2.5">
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="/">
                                    About
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="/">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="/">
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="/">
                                    Privacy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-base font-medium">Social</h4>
                        <ul className="space-y-2.5">
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="https://twitter.com/sadmann17">
                                    X
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="https://github.com/sadmann7">
                                GitHub
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="https://discord.com/users/sadmann">
                                    Discord
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="https://cal.com/sadmann7">
                                    cal.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-base font-medium">Lofi</h4>
                        <ul className="space-y-2.5">
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="https://www.youtube.com/watch?v=jfKfPfyJRdk">
                                    beats to study to
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="https://www.youtube.com/watch?v=rUxyKA_-grg">
                                    beats to chill to
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="https://www.youtube.com/watch?v=rwionZbOryo">
                                    a fresh start
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="https://www.youtube.com/watch?v=2gliGzb2_1I">
                                    coffee to go
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-3">
                    <h4 className="text-base font-medium">Subscribe to our newsletter</h4>
                    <form className="grid w-full" autoComplete="off">
                        <div className="relative space-y-0">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only" htmlFor=":R5nfj6ja:-form-item">Email</label>
                            
                            <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pr-12" placeholder="skate@gmail.com" id=":R5nfj6ja:-form-item" aria-describedby=":R5nfj6ja:-form-item-description" aria-invalid="false" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            
                                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 absolute right-[3.5px] top-[4px] z-20 size-7">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-3" aria-hidden="true">
                                        <path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="sr-only">Join newsletter</span>
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

        <div className="flex items-center space-x-4">
           <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
                Built by <b>Sadman</b>
            </div>
            <div className="flex items-center space-x-1">
                <a target="_blank" rel="noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-9" href="https://github.com/sadmann7/skateshop">
                    <svg viewBox="0 0 438.549 438.549" className="size-4" aria-hidden="true">
                        <path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
                    </svg>
                </a>
                
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-8" type="button" id="radix-:R5bfj6ja:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
                        <path d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                    </svg>

                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
                        <path d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    </footer>
  );
}