
export const RevenueCard = ({
    title,
    shadowWarning,
    orderCount,
    amount
}) => {
    return (
        <div>
            <div>
                <div className="bg-white rounded shadow-md p-5">
                    <div>
                        <b>{title}</b>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            $<b> {amount}</b>
                        </div>
                        {orderCount ? <div className="flex cursor-pointer font-medium">
                            <div className="text-blue-600">
                                {orderCount} orders(s)
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </div> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};
