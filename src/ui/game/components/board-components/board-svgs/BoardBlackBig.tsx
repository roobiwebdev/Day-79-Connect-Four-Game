import React from "react";
import { BoardBlack } from "./BoardBlack";

const BoardBlackBig: React.FC<BoardBlack> = ({ children }) => {
  return (
    <div className="absolute top-[0.52rem]">
      <svg
        width="632"
        height="594"
        viewBox="0 0 632 594"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_5_3954)">
          <mask id="path-1-inside-1_5_3954" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M40 0C17.9086 0 0 17.9086 0 40V544C0 566.091 17.9086 584 40 584H592C614.091 584 632 566.091 632 544V40C632 17.9086 614.091 0 592 0H40ZM52 84C69.6731 84 84 69.6731 84 52C84 34.3269 69.6731 20 52 20C34.3269 20 20 34.3269 20 52C20 69.6731 34.3269 84 52 84ZM140 84C157.673 84 172 69.6731 172 52C172 34.3269 157.673 20 140 20C122.327 20 108 34.3269 108 52C108 69.6731 122.327 84 140 84ZM260 52C260 69.6731 245.673 84 228 84C210.327 84 196 69.6731 196 52C196 34.3269 210.327 20 228 20C245.673 20 260 34.3269 260 52ZM316 84C333.673 84 348 69.6731 348 52C348 34.3269 333.673 20 316 20C298.327 20 284 34.3269 284 52C284 69.6731 298.327 84 316 84ZM436 52C436 69.6731 421.673 84 404 84C386.327 84 372 69.6731 372 52C372 34.3269 386.327 20 404 20C421.673 20 436 34.3269 436 52ZM492 84C509.673 84 524 69.6731 524 52C524 34.3269 509.673 20 492 20C474.327 20 460 34.3269 460 52C460 69.6731 474.327 84 492 84ZM612 52C612 69.6731 597.673 84 580 84C562.327 84 548 69.6731 548 52C548 34.3269 562.327 20 580 20C597.673 20 612 34.3269 612 52ZM52 172C69.6731 172 84 157.673 84 140C84 122.327 69.6731 108 52 108C34.3269 108 20 122.327 20 140C20 157.673 34.3269 172 52 172ZM172 140C172 157.673 157.673 172 140 172C122.327 172 108 157.673 108 140C108 122.327 122.327 108 140 108C157.673 108 172 122.327 172 140ZM228 172C245.673 172 260 157.673 260 140C260 122.327 245.673 108 228 108C210.327 108 196 122.327 196 140C196 157.673 210.327 172 228 172ZM348 140C348 157.673 333.673 172 316 172C298.327 172 284 157.673 284 140C284 122.327 298.327 108 316 108C333.673 108 348 122.327 348 140ZM404 172C421.673 172 436 157.673 436 140C436 122.327 421.673 108 404 108C386.327 108 372 122.327 372 140C372 157.673 386.327 172 404 172ZM524 140C524 157.673 509.673 172 492 172C474.327 172 460 157.673 460 140C460 122.327 474.327 108 492 108C509.673 108 524 122.327 524 140ZM580 172C597.673 172 612 157.673 612 140C612 122.327 597.673 108 580 108C562.327 108 548 122.327 548 140C548 157.673 562.327 172 580 172ZM84 228C84 245.673 69.6731 260 52 260C34.3269 260 20 245.673 20 228C20 210.327 34.3269 196 52 196C69.6731 196 84 210.327 84 228ZM140 260C157.673 260 172 245.673 172 228C172 210.327 157.673 196 140 196C122.327 196 108 210.327 108 228C108 245.673 122.327 260 140 260ZM260 228C260 245.673 245.673 260 228 260C210.327 260 196 245.673 196 228C196 210.327 210.327 196 228 196C245.673 196 260 210.327 260 228ZM316 260C333.673 260 348 245.673 348 228C348 210.327 333.673 196 316 196C298.327 196 284 210.327 284 228C284 245.673 298.327 260 316 260ZM436 228C436 245.673 421.673 260 404 260C386.327 260 372 245.673 372 228C372 210.327 386.327 196 404 196C421.673 196 436 210.327 436 228ZM492 260C509.673 260 524 245.673 524 228C524 210.327 509.673 196 492 196C474.327 196 460 210.327 460 228C460 245.673 474.327 260 492 260ZM612 228C612 245.673 597.673 260 580 260C562.327 260 548 245.673 548 228C548 210.327 562.327 196 580 196C597.673 196 612 210.327 612 228ZM52 348C69.6731 348 84 333.673 84 316C84 298.327 69.6731 284 52 284C34.3269 284 20 298.327 20 316C20 333.673 34.3269 348 52 348ZM172 316C172 333.673 157.673 348 140 348C122.327 348 108 333.673 108 316C108 298.327 122.327 284 140 284C157.673 284 172 298.327 172 316ZM228 348C245.673 348 260 333.673 260 316C260 298.327 245.673 284 228 284C210.327 284 196 298.327 196 316C196 333.673 210.327 348 228 348ZM348 316C348 333.673 333.673 348 316 348C298.327 348 284 333.673 284 316C284 298.327 298.327 284 316 284C333.673 284 348 298.327 348 316ZM404 348C421.673 348 436 333.673 436 316C436 298.327 421.673 284 404 284C386.327 284 372 298.327 372 316C372 333.673 386.327 348 404 348ZM524 316C524 333.673 509.673 348 492 348C474.327 348 460 333.673 460 316C460 298.327 474.327 284 492 284C509.673 284 524 298.327 524 316ZM580 348C597.673 348 612 333.673 612 316C612 298.327 597.673 284 580 284C562.327 284 548 298.327 548 316C548 333.673 562.327 348 580 348ZM84 404C84 421.673 69.6731 436 52 436C34.3269 436 20 421.673 20 404C20 386.327 34.3269 372 52 372C69.6731 372 84 386.327 84 404ZM140 436C157.673 436 172 421.673 172 404C172 386.327 157.673 372 140 372C122.327 372 108 386.327 108 404C108 421.673 122.327 436 140 436ZM260 404C260 421.673 245.673 436 228 436C210.327 436 196 421.673 196 404C196 386.327 210.327 372 228 372C245.673 372 260 386.327 260 404ZM316 436C333.673 436 348 421.673 348 404C348 386.327 333.673 372 316 372C298.327 372 284 386.327 284 404C284 421.673 298.327 436 316 436ZM436 404C436 421.673 421.673 436 404 436C386.327 436 372 421.673 372 404C372 386.327 386.327 372 404 372C421.673 372 436 386.327 436 404ZM492 436C509.673 436 524 421.673 524 404C524 386.327 509.673 372 492 372C474.327 372 460 386.327 460 404C460 421.673 474.327 436 492 436ZM612 404C612 421.673 597.673 436 580 436C562.327 436 548 421.673 548 404C548 386.327 562.327 372 580 372C597.673 372 612 386.327 612 404ZM52 524C69.6731 524 84 509.673 84 492C84 474.327 69.6731 460 52 460C34.3269 460 20 474.327 20 492C20 509.673 34.3269 524 52 524ZM172 492C172 509.673 157.673 524 140 524C122.327 524 108 509.673 108 492C108 474.327 122.327 460 140 460C157.673 460 172 474.327 172 492ZM348 492C348 509.673 333.673 524 316 524C298.327 524 284 509.673 284 492C284 474.327 298.327 460 316 460C333.673 460 348 474.327 348 492ZM228 524C245.673 524 260 509.673 260 492C260 474.327 245.673 460 228 460C210.327 460 196 474.327 196 492C196 509.673 210.327 524 228 524ZM436 492C436 509.673 421.673 524 404 524C386.327 524 372 509.673 372 492C372 474.327 386.327 460 404 460C421.673 460 436 474.327 436 492ZM492 524C509.673 524 524 509.673 524 492C524 474.327 509.673 460 492 460C474.327 460 460 474.327 460 492C460 509.673 474.327 524 492 524ZM612 492C612 509.673 597.673 524 580 524C562.327 524 548 509.673 548 492C548 474.327 562.327 460 580 460C597.673 460 612 474.327 612 492Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40 0C17.9086 0 0 17.9086 0 40V544C0 566.091 17.9086 584 40 584H592C614.091 584 632 566.091 632 544V40C632 17.9086 614.091 0 592 0H40ZM52 84C69.6731 84 84 69.6731 84 52C84 34.3269 69.6731 20 52 20C34.3269 20 20 34.3269 20 52C20 69.6731 34.3269 84 52 84ZM140 84C157.673 84 172 69.6731 172 52C172 34.3269 157.673 20 140 20C122.327 20 108 34.3269 108 52C108 69.6731 122.327 84 140 84ZM260 52C260 69.6731 245.673 84 228 84C210.327 84 196 69.6731 196 52C196 34.3269 210.327 20 228 20C245.673 20 260 34.3269 260 52ZM316 84C333.673 84 348 69.6731 348 52C348 34.3269 333.673 20 316 20C298.327 20 284 34.3269 284 52C284 69.6731 298.327 84 316 84ZM436 52C436 69.6731 421.673 84 404 84C386.327 84 372 69.6731 372 52C372 34.3269 386.327 20 404 20C421.673 20 436 34.3269 436 52ZM492 84C509.673 84 524 69.6731 524 52C524 34.3269 509.673 20 492 20C474.327 20 460 34.3269 460 52C460 69.6731 474.327 84 492 84ZM612 52C612 69.6731 597.673 84 580 84C562.327 84 548 69.6731 548 52C548 34.3269 562.327 20 580 20C597.673 20 612 34.3269 612 52ZM52 172C69.6731 172 84 157.673 84 140C84 122.327 69.6731 108 52 108C34.3269 108 20 122.327 20 140C20 157.673 34.3269 172 52 172ZM172 140C172 157.673 157.673 172 140 172C122.327 172 108 157.673 108 140C108 122.327 122.327 108 140 108C157.673 108 172 122.327 172 140ZM228 172C245.673 172 260 157.673 260 140C260 122.327 245.673 108 228 108C210.327 108 196 122.327 196 140C196 157.673 210.327 172 228 172ZM348 140C348 157.673 333.673 172 316 172C298.327 172 284 157.673 284 140C284 122.327 298.327 108 316 108C333.673 108 348 122.327 348 140ZM404 172C421.673 172 436 157.673 436 140C436 122.327 421.673 108 404 108C386.327 108 372 122.327 372 140C372 157.673 386.327 172 404 172ZM524 140C524 157.673 509.673 172 492 172C474.327 172 460 157.673 460 140C460 122.327 474.327 108 492 108C509.673 108 524 122.327 524 140ZM580 172C597.673 172 612 157.673 612 140C612 122.327 597.673 108 580 108C562.327 108 548 122.327 548 140C548 157.673 562.327 172 580 172ZM84 228C84 245.673 69.6731 260 52 260C34.3269 260 20 245.673 20 228C20 210.327 34.3269 196 52 196C69.6731 196 84 210.327 84 228ZM140 260C157.673 260 172 245.673 172 228C172 210.327 157.673 196 140 196C122.327 196 108 210.327 108 228C108 245.673 122.327 260 140 260ZM260 228C260 245.673 245.673 260 228 260C210.327 260 196 245.673 196 228C196 210.327 210.327 196 228 196C245.673 196 260 210.327 260 228ZM316 260C333.673 260 348 245.673 348 228C348 210.327 333.673 196 316 196C298.327 196 284 210.327 284 228C284 245.673 298.327 260 316 260ZM436 228C436 245.673 421.673 260 404 260C386.327 260 372 245.673 372 228C372 210.327 386.327 196 404 196C421.673 196 436 210.327 436 228ZM492 260C509.673 260 524 245.673 524 228C524 210.327 509.673 196 492 196C474.327 196 460 210.327 460 228C460 245.673 474.327 260 492 260ZM612 228C612 245.673 597.673 260 580 260C562.327 260 548 245.673 548 228C548 210.327 562.327 196 580 196C597.673 196 612 210.327 612 228ZM52 348C69.6731 348 84 333.673 84 316C84 298.327 69.6731 284 52 284C34.3269 284 20 298.327 20 316C20 333.673 34.3269 348 52 348ZM172 316C172 333.673 157.673 348 140 348C122.327 348 108 333.673 108 316C108 298.327 122.327 284 140 284C157.673 284 172 298.327 172 316ZM228 348C245.673 348 260 333.673 260 316C260 298.327 245.673 284 228 284C210.327 284 196 298.327 196 316C196 333.673 210.327 348 228 348ZM348 316C348 333.673 333.673 348 316 348C298.327 348 284 333.673 284 316C284 298.327 298.327 284 316 284C333.673 284 348 298.327 348 316ZM404 348C421.673 348 436 333.673 436 316C436 298.327 421.673 284 404 284C386.327 284 372 298.327 372 316C372 333.673 386.327 348 404 348ZM524 316C524 333.673 509.673 348 492 348C474.327 348 460 333.673 460 316C460 298.327 474.327 284 492 284C509.673 284 524 298.327 524 316ZM580 348C597.673 348 612 333.673 612 316C612 298.327 597.673 284 580 284C562.327 284 548 298.327 548 316C548 333.673 562.327 348 580 348ZM84 404C84 421.673 69.6731 436 52 436C34.3269 436 20 421.673 20 404C20 386.327 34.3269 372 52 372C69.6731 372 84 386.327 84 404ZM140 436C157.673 436 172 421.673 172 404C172 386.327 157.673 372 140 372C122.327 372 108 386.327 108 404C108 421.673 122.327 436 140 436ZM260 404C260 421.673 245.673 436 228 436C210.327 436 196 421.673 196 404C196 386.327 210.327 372 228 372C245.673 372 260 386.327 260 404ZM316 436C333.673 436 348 421.673 348 404C348 386.327 333.673 372 316 372C298.327 372 284 386.327 284 404C284 421.673 298.327 436 316 436ZM436 404C436 421.673 421.673 436 404 436C386.327 436 372 421.673 372 404C372 386.327 386.327 372 404 372C421.673 372 436 386.327 436 404ZM492 436C509.673 436 524 421.673 524 404C524 386.327 509.673 372 492 372C474.327 372 460 386.327 460 404C460 421.673 474.327 436 492 436ZM612 404C612 421.673 597.673 436 580 436C562.327 436 548 421.673 548 404C548 386.327 562.327 372 580 372C597.673 372 612 386.327 612 404ZM52 524C69.6731 524 84 509.673 84 492C84 474.327 69.6731 460 52 460C34.3269 460 20 474.327 20 492C20 509.673 34.3269 524 52 524ZM172 492C172 509.673 157.673 524 140 524C122.327 524 108 509.673 108 492C108 474.327 122.327 460 140 460C157.673 460 172 474.327 172 492ZM348 492C348 509.673 333.673 524 316 524C298.327 524 284 509.673 284 492C284 474.327 298.327 460 316 460C333.673 460 348 474.327 348 492ZM228 524C245.673 524 260 509.673 260 492C260 474.327 245.673 460 228 460C210.327 460 196 474.327 196 492C196 509.673 210.327 524 228 524ZM436 492C436 509.673 421.673 524 404 524C386.327 524 372 509.673 372 492C372 474.327 386.327 460 404 460C421.673 460 436 474.327 436 492ZM492 524C509.673 524 524 509.673 524 492C524 474.327 509.673 460 492 460C474.327 460 460 474.327 460 492C460 509.673 474.327 524 492 524ZM612 492C612 509.673 597.673 524 580 524C562.327 524 548 509.673 548 492C548 474.327 562.327 460 580 460C597.673 460 612 474.327 612 492Z"
            fill="black"
          />
          <path
            d="M3 40C3 19.5655 19.5655 3 40 3V-3C16.2518 -3 -3 16.2517 -3 40H3ZM3 544V40H-3V544H3ZM40 581C19.5655 581 3 564.435 3 544H-3C-3 567.748 16.2517 587 40 587V581ZM592 581H40V587H592V581ZM629 544C629 564.435 612.435 581 592 581V587C615.748 587 635 567.748 635 544H629ZM629 40V544H635V40H629ZM592 3C612.435 3 629 19.5655 629 40H635C635 16.2518 615.748 -3 592 -3V3ZM40 3H592V-3H40V3ZM81 52C81 68.0163 68.0163 81 52 81V87C71.33 87 87 71.33 87 52H81ZM52 23C68.0163 23 81 35.9837 81 52H87C87 32.67 71.33 17 52 17V23ZM23 52C23 35.9837 35.9837 23 52 23V17C32.67 17 17 32.67 17 52H23ZM52 81C35.9837 81 23 68.0163 23 52H17C17 71.33 32.67 87 52 87V81ZM169 52C169 68.0163 156.016 81 140 81V87C159.33 87 175 71.33 175 52H169ZM140 23C156.016 23 169 35.9837 169 52H175C175 32.67 159.33 17 140 17V23ZM111 52C111 35.9837 123.984 23 140 23V17C120.67 17 105 32.67 105 52H111ZM140 81C123.984 81 111 68.0163 111 52H105C105 71.33 120.67 87 140 87V81ZM228 87C247.33 87 263 71.33 263 52H257C257 68.0163 244.016 81 228 81V87ZM193 52C193 71.33 208.67 87 228 87V81C211.984 81 199 68.0163 199 52H193ZM228 17C208.67 17 193 32.67 193 52H199C199 35.9837 211.984 23 228 23V17ZM263 52C263 32.67 247.33 17 228 17V23C244.016 23 257 35.9837 257 52H263ZM345 52C345 68.0163 332.016 81 316 81V87C335.33 87 351 71.33 351 52H345ZM316 23C332.016 23 345 35.9837 345 52H351C351 32.67 335.33 17 316 17V23ZM287 52C287 35.9837 299.984 23 316 23V17C296.67 17 281 32.67 281 52H287ZM316 81C299.984 81 287 68.0163 287 52H281C281 71.33 296.67 87 316 87V81ZM404 87C423.33 87 439 71.33 439 52H433C433 68.0163 420.016 81 404 81V87ZM369 52C369 71.33 384.67 87 404 87V81C387.984 81 375 68.0163 375 52H369ZM404 17C384.67 17 369 32.67 369 52H375C375 35.9837 387.984 23 404 23V17ZM439 52C439 32.67 423.33 17 404 17V23C420.016 23 433 35.9837 433 52H439ZM521 52C521 68.0163 508.016 81 492 81V87C511.33 87 527 71.33 527 52H521ZM492 23C508.016 23 521 35.9837 521 52H527C527 32.67 511.33 17 492 17V23ZM463 52C463 35.9837 475.984 23 492 23V17C472.67 17 457 32.67 457 52H463ZM492 81C475.984 81 463 68.0163 463 52H457C457 71.33 472.67 87 492 87V81ZM580 87C599.33 87 615 71.33 615 52H609C609 68.0163 596.016 81 580 81V87ZM545 52C545 71.33 560.67 87 580 87V81C563.984 81 551 68.0163 551 52H545ZM580 17C560.67 17 545 32.67 545 52H551C551 35.9837 563.984 23 580 23V17ZM615 52C615 32.67 599.33 17 580 17V23C596.016 23 609 35.9837 609 52H615ZM81 140C81 156.016 68.0163 169 52 169V175C71.33 175 87 159.33 87 140H81ZM52 111C68.0163 111 81 123.984 81 140H87C87 120.67 71.33 105 52 105V111ZM23 140C23 123.984 35.9837 111 52 111V105C32.67 105 17 120.67 17 140H23ZM52 169C35.9837 169 23 156.016 23 140H17C17 159.33 32.67 175 52 175V169ZM140 175C159.33 175 175 159.33 175 140H169C169 156.016 156.016 169 140 169V175ZM105 140C105 159.33 120.67 175 140 175V169C123.984 169 111 156.016 111 140H105ZM140 105C120.67 105 105 120.67 105 140H111C111 123.984 123.984 111 140 111V105ZM175 140C175 120.67 159.33 105 140 105V111C156.016 111 169 123.984 169 140H175ZM257 140C257 156.016 244.016 169 228 169V175C247.33 175 263 159.33 263 140H257ZM228 111C244.016 111 257 123.984 257 140H263C263 120.67 247.33 105 228 105V111ZM199 140C199 123.984 211.984 111 228 111V105C208.67 105 193 120.67 193 140H199ZM228 169C211.984 169 199 156.016 199 140H193C193 159.33 208.67 175 228 175V169ZM316 175C335.33 175 351 159.33 351 140H345C345 156.016 332.016 169 316 169V175ZM281 140C281 159.33 296.67 175 316 175V169C299.984 169 287 156.016 287 140H281ZM316 105C296.67 105 281 120.67 281 140H287C287 123.984 299.984 111 316 111V105ZM351 140C351 120.67 335.33 105 316 105V111C332.016 111 345 123.984 345 140H351ZM433 140C433 156.016 420.016 169 404 169V175C423.33 175 439 159.33 439 140H433ZM404 111C420.016 111 433 123.984 433 140H439C439 120.67 423.33 105 404 105V111ZM375 140C375 123.984 387.984 111 404 111V105C384.67 105 369 120.67 369 140H375ZM404 169C387.984 169 375 156.016 375 140H369C369 159.33 384.67 175 404 175V169ZM492 175C511.33 175 527 159.33 527 140H521C521 156.016 508.016 169 492 169V175ZM457 140C457 159.33 472.67 175 492 175V169C475.984 169 463 156.016 463 140H457ZM492 105C472.67 105 457 120.67 457 140H463C463 123.984 475.984 111 492 111V105ZM527 140C527 120.67 511.33 105 492 105V111C508.016 111 521 123.984 521 140H527ZM609 140C609 156.016 596.016 169 580 169V175C599.33 175 615 159.33 615 140H609ZM580 111C596.016 111 609 123.984 609 140H615C615 120.67 599.33 105 580 105V111ZM551 140C551 123.984 563.984 111 580 111V105C560.67 105 545 120.67 545 140H551ZM580 169C563.984 169 551 156.016 551 140H545C545 159.33 560.67 175 580 175V169ZM52 263C71.33 263 87 247.33 87 228H81C81 244.016 68.0163 257 52 257V263ZM17 228C17 247.33 32.67 263 52 263V257C35.9837 257 23 244.016 23 228H17ZM52 193C32.67 193 17 208.67 17 228H23C23 211.984 35.9837 199 52 199V193ZM87 228C87 208.67 71.33 193 52 193V199C68.0163 199 81 211.984 81 228H87ZM169 228C169 244.016 156.016 257 140 257V263C159.33 263 175 247.33 175 228H169ZM140 199C156.016 199 169 211.984 169 228H175C175 208.67 159.33 193 140 193V199ZM111 228C111 211.984 123.984 199 140 199V193C120.67 193 105 208.67 105 228H111ZM140 257C123.984 257 111 244.016 111 228H105C105 247.33 120.67 263 140 263V257ZM228 263C247.33 263 263 247.33 263 228H257C257 244.016 244.016 257 228 257V263ZM193 228C193 247.33 208.67 263 228 263V257C211.984 257 199 244.016 199 228H193ZM228 193C208.67 193 193 208.67 193 228H199C199 211.984 211.984 199 228 199V193ZM263 228C263 208.67 247.33 193 228 193V199C244.016 199 257 211.984 257 228H263ZM345 228C345 244.016 332.016 257 316 257V263C335.33 263 351 247.33 351 228H345ZM316 199C332.016 199 345 211.984 345 228H351C351 208.67 335.33 193 316 193V199ZM287 228C287 211.984 299.984 199 316 199V193C296.67 193 281 208.67 281 228H287ZM316 257C299.984 257 287 244.016 287 228H281C281 247.33 296.67 263 316 263V257ZM404 263C423.33 263 439 247.33 439 228H433C433 244.016 420.016 257 404 257V263ZM369 228C369 247.33 384.67 263 404 263V257C387.984 257 375 244.016 375 228H369ZM404 193C384.67 193 369 208.67 369 228H375C375 211.984 387.984 199 404 199V193ZM439 228C439 208.67 423.33 193 404 193V199C420.016 199 433 211.984 433 228H439ZM521 228C521 244.016 508.016 257 492 257V263C511.33 263 527 247.33 527 228H521ZM492 199C508.016 199 521 211.984 521 228H527C527 208.67 511.33 193 492 193V199ZM463 228C463 211.984 475.984 199 492 199V193C472.67 193 457 208.67 457 228H463ZM492 257C475.984 257 463 244.016 463 228H457C457 247.33 472.67 263 492 263V257ZM580 263C599.33 263 615 247.33 615 228H609C609 244.016 596.016 257 580 257V263ZM545 228C545 247.33 560.67 263 580 263V257C563.984 257 551 244.016 551 228H545ZM580 193C560.67 193 545 208.67 545 228H551C551 211.984 563.984 199 580 199V193ZM615 228C615 208.67 599.33 193 580 193V199C596.016 199 609 211.984 609 228H615ZM81 316C81 332.016 68.0163 345 52 345V351C71.33 351 87 335.33 87 316H81ZM52 287C68.0163 287 81 299.984 81 316H87C87 296.67 71.33 281 52 281V287ZM23 316C23 299.984 35.9837 287 52 287V281C32.67 281 17 296.67 17 316H23ZM52 345C35.9837 345 23 332.016 23 316H17C17 335.33 32.67 351 52 351V345ZM140 351C159.33 351 175 335.33 175 316H169C169 332.016 156.016 345 140 345V351ZM105 316C105 335.33 120.67 351 140 351V345C123.984 345 111 332.016 111 316H105ZM140 281C120.67 281 105 296.67 105 316H111C111 299.984 123.984 287 140 287V281ZM175 316C175 296.67 159.33 281 140 281V287C156.016 287 169 299.984 169 316H175ZM257 316C257 332.016 244.016 345 228 345V351C247.33 351 263 335.33 263 316H257ZM228 287C244.016 287 257 299.984 257 316H263C263 296.67 247.33 281 228 281V287ZM199 316C199 299.984 211.984 287 228 287V281C208.67 281 193 296.67 193 316H199ZM228 345C211.984 345 199 332.016 199 316H193C193 335.33 208.67 351 228 351V345ZM316 351C335.33 351 351 335.33 351 316H345C345 332.016 332.016 345 316 345V351ZM281 316C281 335.33 296.67 351 316 351V345C299.984 345 287 332.016 287 316H281ZM316 281C296.67 281 281 296.67 281 316H287C287 299.984 299.984 287 316 287V281ZM351 316C351 296.67 335.33 281 316 281V287C332.016 287 345 299.984 345 316H351ZM433 316C433 332.016 420.016 345 404 345V351C423.33 351 439 335.33 439 316H433ZM404 287C420.016 287 433 299.984 433 316H439C439 296.67 423.33 281 404 281V287ZM375 316C375 299.984 387.984 287 404 287V281C384.67 281 369 296.67 369 316H375ZM404 345C387.984 345 375 332.016 375 316H369C369 335.33 384.67 351 404 351V345ZM492 351C511.33 351 527 335.33 527 316H521C521 332.016 508.016 345 492 345V351ZM457 316C457 335.33 472.67 351 492 351V345C475.984 345 463 332.016 463 316H457ZM492 281C472.67 281 457 296.67 457 316H463C463 299.984 475.984 287 492 287V281ZM527 316C527 296.67 511.33 281 492 281V287C508.016 287 521 299.984 521 316H527ZM609 316C609 332.016 596.016 345 580 345V351C599.33 351 615 335.33 615 316H609ZM580 287C596.016 287 609 299.984 609 316H615C615 296.67 599.33 281 580 281V287ZM551 316C551 299.984 563.984 287 580 287V281C560.67 281 545 296.67 545 316H551ZM580 345C563.984 345 551 332.016 551 316H545C545 335.33 560.67 351 580 351V345ZM52 439C71.33 439 87 423.33 87 404H81C81 420.016 68.0163 433 52 433V439ZM17 404C17 423.33 32.67 439 52 439V433C35.9837 433 23 420.016 23 404H17ZM52 369C32.67 369 17 384.67 17 404H23C23 387.984 35.9837 375 52 375V369ZM87 404C87 384.67 71.33 369 52 369V375C68.0163 375 81 387.984 81 404H87ZM169 404C169 420.016 156.016 433 140 433V439C159.33 439 175 423.33 175 404H169ZM140 375C156.016 375 169 387.984 169 404H175C175 384.67 159.33 369 140 369V375ZM111 404C111 387.984 123.984 375 140 375V369C120.67 369 105 384.67 105 404H111ZM140 433C123.984 433 111 420.016 111 404H105C105 423.33 120.67 439 140 439V433ZM228 439C247.33 439 263 423.33 263 404H257C257 420.016 244.016 433 228 433V439ZM193 404C193 423.33 208.67 439 228 439V433C211.984 433 199 420.016 199 404H193ZM228 369C208.67 369 193 384.67 193 404H199C199 387.984 211.984 375 228 375V369ZM263 404C263 384.67 247.33 369 228 369V375C244.016 375 257 387.984 257 404H263ZM345 404C345 420.016 332.016 433 316 433V439C335.33 439 351 423.33 351 404H345ZM316 375C332.016 375 345 387.984 345 404H351C351 384.67 335.33 369 316 369V375ZM287 404C287 387.984 299.984 375 316 375V369C296.67 369 281 384.67 281 404H287ZM316 433C299.984 433 287 420.016 287 404H281C281 423.33 296.67 439 316 439V433ZM404 439C423.33 439 439 423.33 439 404H433C433 420.016 420.016 433 404 433V439ZM369 404C369 423.33 384.67 439 404 439V433C387.984 433 375 420.016 375 404H369ZM404 369C384.67 369 369 384.67 369 404H375C375 387.984 387.984 375 404 375V369ZM439 404C439 384.67 423.33 369 404 369V375C420.016 375 433 387.984 433 404H439ZM521 404C521 420.016 508.016 433 492 433V439C511.33 439 527 423.33 527 404H521ZM492 375C508.016 375 521 387.984 521 404H527C527 384.67 511.33 369 492 369V375ZM463 404C463 387.984 475.984 375 492 375V369C472.67 369 457 384.67 457 404H463ZM492 433C475.984 433 463 420.016 463 404H457C457 423.33 472.67 439 492 439V433ZM580 439C599.33 439 615 423.33 615 404H609C609 420.016 596.016 433 580 433V439ZM545 404C545 423.33 560.67 439 580 439V433C563.984 433 551 420.016 551 404H545ZM580 369C560.67 369 545 384.67 545 404H551C551 387.984 563.984 375 580 375V369ZM615 404C615 384.67 599.33 369 580 369V375C596.016 375 609 387.984 609 404H615ZM81 492C81 508.016 68.0163 521 52 521V527C71.33 527 87 511.33 87 492H81ZM52 463C68.0163 463 81 475.984 81 492H87C87 472.67 71.33 457 52 457V463ZM23 492C23 475.984 35.9837 463 52 463V457C32.67 457 17 472.67 17 492H23ZM52 521C35.9837 521 23 508.016 23 492H17C17 511.33 32.67 527 52 527V521ZM140 527C159.33 527 175 511.33 175 492H169C169 508.016 156.016 521 140 521V527ZM105 492C105 511.33 120.67 527 140 527V521C123.984 521 111 508.016 111 492H105ZM140 457C120.67 457 105 472.67 105 492H111C111 475.984 123.984 463 140 463V457ZM175 492C175 472.67 159.33 457 140 457V463C156.016 463 169 475.984 169 492H175ZM316 527C335.33 527 351 511.33 351 492H345C345 508.016 332.016 521 316 521V527ZM281 492C281 511.33 296.67 527 316 527V521C299.984 521 287 508.016 287 492H281ZM316 457C296.67 457 281 472.67 281 492H287C287 475.984 299.984 463 316 463V457ZM351 492C351 472.67 335.33 457 316 457V463C332.016 463 345 475.984 345 492H351ZM257 492C257 508.016 244.016 521 228 521V527C247.33 527 263 511.33 263 492H257ZM228 463C244.016 463 257 475.984 257 492H263C263 472.67 247.33 457 228 457V463ZM199 492C199 475.984 211.984 463 228 463V457C208.67 457 193 472.67 193 492H199ZM228 521C211.984 521 199 508.016 199 492H193C193 511.33 208.67 527 228 527V521ZM404 527C423.33 527 439 511.33 439 492H433C433 508.016 420.016 521 404 521V527ZM369 492C369 511.33 384.67 527 404 527V521C387.984 521 375 508.016 375 492H369ZM404 457C384.67 457 369 472.67 369 492H375C375 475.984 387.984 463 404 463V457ZM439 492C439 472.67 423.33 457 404 457V463C420.016 463 433 475.984 433 492H439ZM521 492C521 508.016 508.016 521 492 521V527C511.33 527 527 511.33 527 492H521ZM492 463C508.016 463 521 475.984 521 492H527C527 472.67 511.33 457 492 457V463ZM463 492C463 475.984 475.984 463 492 463V457C472.67 457 457 472.67 457 492H463ZM492 521C475.984 521 463 508.016 463 492H457C457 511.33 472.67 527 492 527V521ZM580 527C599.33 527 615 511.33 615 492H609C609 508.016 596.016 521 580 521V527ZM545 492C545 511.33 560.67 527 580 527V521C563.984 521 551 508.016 551 492H545ZM580 457C560.67 457 545 472.67 545 492H551C551 475.984 563.984 463 580 463V457ZM615 492C615 472.67 599.33 457 580 457V463C596.016 463 609 475.984 609 492H615Z"
            fill="black"
            mask="url(#path-1-inside-1_5_3954)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_5_3954"
            x="0"
            y="0"
            width="632"
            height="594"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_5_3954"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_5_3954"
              result="shape"
            />
          </filter>
        </defs>
        {children}
      </svg>
    </div>
  );
};

export default BoardBlackBig;
