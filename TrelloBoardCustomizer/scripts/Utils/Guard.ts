﻿/// <reference path="../References.ts" />
module TrelloBoardCustomizer.Utils
{
    export class Guard
    {
        static notNull(argument: any, argumentName: string): void
        {
            if (argument === undefined)
            {
                throw new RangeError("Argument '" + argumentName + "' can't be undefined");
            }

            if (argument === null)
            {
                throw new RangeError("Argument '" + argumentName + "' can't be null");
            }
        }

        static notNullOrEmpty(argument: any, argumentName: string): void
        {
            Guard.notNull(argument, argumentName);

            if (argument.length === 0)
            {
                throw new RangeError("Argument '" + argumentName + "' can't be empty");
            }
        }

        static numberIsGreaterOrEqualToZero(argument: number, argumentName: string): void
        {
            Guard.notNull(argument, argumentName);

            if (argument < 0)
            {
                throw new RangeError("Argument '" + argumentName + "' can't be less than zero.");
            }
        }
    }
}